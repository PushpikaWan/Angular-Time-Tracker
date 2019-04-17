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

  taskListByDate: DateSpecificTask[]; //todo add relevent type for this
  
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.taskListChanged.subscribe(
      (taskData: Task[]) => {
          this.createDateSpecificList(taskData);
      }
    );
  }

  private createDateSpecificList(taskData : Task[]) {
    const result:  DateSpecificTask[] = taskData.map((item) => { 
      return {date:this.getPresnetableDate(item["date"]) , tasks:[]};
    });
    console.log(result);

    taskData.map((val, i) => {
      for (var i=0; i<result.length; i++) {
          if(this.arePresnetableDatesEquals(result[i].date,this.getPresnetableDate(val.date))){
            result[i].tasks.push(val);
          }
      }
    });

    console.log(" result_",result);
    
  }

  private getPresnetableDate(date :Date): PresentableDate{
    return {date:date.getDate(),month:date.getMonth(), year: date.getFullYear()};
  }

  arePresnetableDatesEquals(date1: PresentableDate, date2: PresentableDate): boolean{
    return (date1.date === date2.date && date1.month === date2.month && date1.year === date2.year);
  }

}

export class PresentableDate{

    date: number;
    month: number;
    year: number;
}

export class DateSpecificTask{

  date: PresentableDate;
  tasks?: Task[];

}
