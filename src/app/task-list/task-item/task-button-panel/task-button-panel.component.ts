import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.module';

@Component({
  selector: 'app-task-button-panel',
  templateUrl: './task-button-panel.component.html',
  styleUrls: ['./task-button-panel.component.scss'
]
})
export class TaskButtonPanelComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
