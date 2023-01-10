import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task'; // interface
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []; // we want to pass the mock data as props of our Task component

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks(); // this is not an observable
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks)); // this is an observable
  }
}
