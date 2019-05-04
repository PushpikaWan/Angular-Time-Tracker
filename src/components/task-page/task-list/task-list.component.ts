import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task.module';
import { Time } from 'src/app/models/time.module';
import { TaskService } from 'src/app/services/task.service';
import { DateSpecificTask, PresentableDate } from '../task-page.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input('dateSpecificTaskList') dateSpecificTask : DateSpecificTask;

  panelOpenState = false;
  taskList: Array<Task> = [];
  totalTime: Time;
  date : PresentableDate;
  
  constructor() { } 

  ngOnInit() {
      console.log("date spe task list",this.dateSpecificTask);
      this.taskList = this.dateSpecificTask.tasks;
      this.date = this.dateSpecificTask.date;

      const totalHours = this.dateSpecificTask.tasks.reduce( (accumulator, pilot) => {
        return accumulator + pilot.timer.hours;
      }, 0);

      const totalMins = this.dateSpecificTask.tasks.reduce( (accumulator, pilot) => {
        return accumulator + pilot.timer.minutes;
      }, 0);

      this.totalTime = {hours:totalHours, minutes: totalMins};
  }


}
