import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: [ './new-task.component.css' ],
})
export class NewTaskComponent implements OnInit {
  taskBody: string;
  closeResult: string;

  constructor(
    private tasksService: TasksService,
    private modalService: NgbModal,
  ) {
    this.taskBody = '';
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  addTask(): void {
    this
      .tasksService
      .addTask(this.taskBody);

    this.taskBody = '';
  }
}
