import { Component, OnInit } from '@angular/core';

interface Task {
  body: string;
}

const TASKS: Task[] = [
  {
    body: 'Eat Lunch',
  },
  {
    body: 'Walk Dog',
  },
  {
    body: 'Learn Karate',
  },
  {
    body: 'Win Lottery',
  },
];

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
