import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// If you use the CLI to generate a component, it will automatically add it to the declarations array and import it
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// This is were you will declare all your routes, and then import them into the imports array
//  One path is connected with one component
//  You can have as many routes as you want, but do not forget to update your main app component html with router-outlet
//  path: '' is the default route, so if you go to localhost:4200, it will load the TasksComponent which had both the add form & the tasks list
//  path: 'about' will load the AboutComponent if you go to localhost:4200/about
//  path: 'tasks/:id' will load the TaskDetailsComponent if you go to localhost:4200/tasks/1 for example

//  By adding the enableTracing: true options in your NgModule  RouterModules.forRoot(AppRoutes), you can see in the console which route is being loaded, which is useful for debugging

// You can also add a guard to a route, so that it can only be accessed if the user is logged in for example
//  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },

// You can also add a child route, so that you can have a route like localhost:4200/about/contact :
//  { path: 'about', component: AboutComponent, children: [
//    { path: 'contact', component: ContactComponent }
//  ] },

// You could also add a redirect, so that if you go to localhost:4200/about, it will redirect you to localhost:4200/about/contact :
//  { path: 'about', component: AboutComponent, children: [
//  { path: '', redirectTo: 'contact', pathMatch: 'full' },
//  { path: 'contact', component: ContactComponent }
//  ] },

// You can also add a route with parameters, so that you can have a route like localhost:4200/tasks/1 :
//  { path: 'tasks/:id', component: TaskDetailsComponent },
// You can then access the id in the TaskDetailsComponent with this.route.snapshot.params.id

// If preferred, you could declare all your routes in a separate file
const AppRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, { enableTracing: true }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
