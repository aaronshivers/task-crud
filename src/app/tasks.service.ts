import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = TASKS;

  constructor() {
  }

  public addTask(body: string): void {
    const task = new Task(uuid(), body);
    this.tasks.push(task);
  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
