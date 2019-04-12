import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.module';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-button-panel',
  templateUrl: './task-button-panel.component.html',
  styleUrls: ['./task-button-panel.component.scss'
]
})
export class TaskButtonPanelComponent implements OnInit {

  @Input() task: Task;

  constructor(private taskService : TaskService) {

  }

  ngOnInit() {

  }

  onDelete(){
    console.log("on delete");
    this.taskService.deleteTask(this.task.id);
  }

}
