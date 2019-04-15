import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.module';
import { Time } from 'src/app/models/time.module';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  panelOpenState = false;
  taskList: Array<Task> = [];
  totalHours: Time;
  date : Date;
  
  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.taskService.taskListChanged.subscribe(
      (taskData: Task[]) => {
        this.taskList = taskData;
      }
    );

  }

}
