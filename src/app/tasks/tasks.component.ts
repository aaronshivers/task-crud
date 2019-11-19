import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() task: Task;

  constructor(public tasksService: TasksService) { }

  ngOnInit() {
  }

  removeTask(id: number): void {
    this.tasksService.removeTask(id);
  }
}
