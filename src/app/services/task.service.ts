import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task'; // interface

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  // this is not an observable
  // getTasks(): Task[] {
  //   return TASKS;
  // }
  // this is an observable. Observables are way better if you wanna use backend data, api and so on
  // getTasks(): Observable<Task[]> {
  //   const tasks = of(TASKS);
  //   return tasks;
  // }

  // same thing as above except now it is coming from the fake server apiUrl through and http GET request
  //  instead of the fake mock data . If you check the network panel of the devtool, you should see the call
  //  to localhost:5000/tasks

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
