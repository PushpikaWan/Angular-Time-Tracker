import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.module';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  panelOpenState = false;
  taskList: Array<Task> = [];
  
  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.taskService.taskListChanged.subscribe(
      (taskData: Task[]) => {
        this.taskList = taskData;
      }
    );

  }

}
