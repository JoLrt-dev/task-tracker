import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject$ = new Subject<any>(); // Subject is a special type of Observable that allows values to be multicasted to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.

  constructor() {}

  toggleAddTask(): void {
    // toggleAddTask() is called from the header component . This is the function that toggles the add-task component, and it also emits the value to the subject.
    // Whatever the status is true or false, it will toggle it to the opposite value to display/hide the add-task component.
    this.showAddTask = !this.showAddTask;
    this.subject$.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    // onToggle() is called from the add-task component. It is the function that subscribes to the subject and returns the value to the add-task component.
    return this.subject$.asObservable();
  }
}
