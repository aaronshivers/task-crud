import { Component, OnInit } from '@angular/core';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.css' ],
})
export class TableComponent implements OnInit {
  tasks = TASKS;

  constructor() { }

  ngOnInit() {
  }

}
