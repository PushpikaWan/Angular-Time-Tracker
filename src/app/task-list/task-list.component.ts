import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from './task-item/task.module';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  panelOpenState = false;
  taskList: Array<Task> = [];

  constructor(private taskService : TaskService) { 
  }

  ngOnInit() {
    this.taskService.taskListChanged.subscribe(
      (taskData: Task[]) => {
        this.taskList = taskData;
      }
    );
  }

}
