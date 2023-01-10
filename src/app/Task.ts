// This is the interface for the Task object
// It allows to define the structure of the object Task

export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
