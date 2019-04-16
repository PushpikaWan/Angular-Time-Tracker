import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.module';
import { TaskService } from '../services/task.service';
import { groupBy } from 'rxjs/operators';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  taskListByDate: any; //todo add relevent type for this
  
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.taskListChanged.subscribe(
      (taskData: Task[]) => {
          this.createDateSpecificList(taskData);
          // this.taskListByDate=taskData;
          // console.log(this.taskListByDate);
      }
    );
  }

  private createDateSpecificList(taskData : Task[]) {
    let result = taskData.map((item) => { 
      return this.getPresnetableDate(item["date"]); 
    });
    console.log(result);

    
  }

  private getPresnetableDate(date :Date): PresentableDate{
    return {date:date.getDate(),month:date.getMonth(), year: date.getFullYear()};
  }


  // private groupBy = (xs) => {
  //   return xs.reduce(
  //     (rv, x) =>{
  //     (rv[this.getPresnetableDate(x.date)] = rv[this.getPresnetableDate(x.date)] || []).push(x);
  //     return rv;
  //   }, {});
  // };

}

export class PresentableDate{

    date: number;
    month: number;
    year: number;

}
