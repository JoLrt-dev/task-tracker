import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task'; // interface
import { TASKS } from 'src/app/mock-tasks'; // mock data

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS; // we want to pass the mock data as props of our Task component
  constructor() {}

  ngOnInit(): void {}
}
