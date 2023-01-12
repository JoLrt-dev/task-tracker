// This is the interface for the Task object
// It allows to define the structure of the object Task
// This will be used in the TaskService to define the type of the tasks array
// and in the AddTask component to define the type of the task object
// ngModel will be used to bind the form fields to the task object

export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
