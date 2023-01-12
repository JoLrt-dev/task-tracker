import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs'; // Subscription is a representation of any work that can be cancelled, such as an Observable execution or an array of Subscriptions.

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false; //
  subscription: Subscription;

  // change the value of showAddTask to the value of the subject

  // The constructor() is where we inject the UiService.
  // When you want to use a service you have to inject it into the constructor.
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value; // value is gonna be the opposite of whatever showaddtask is
    });
  }

  ngOnInit(): void {}
  // When we click on the "Add" we're calling the toggleAddTask() in our service
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
