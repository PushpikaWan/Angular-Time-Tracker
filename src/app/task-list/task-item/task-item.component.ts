import { Component, OnInit, Input  } from '@angular/core';
import { Task } from './task.module';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() currentTask: Task;

  constructor() { }

  ngOnInit() {}

}
