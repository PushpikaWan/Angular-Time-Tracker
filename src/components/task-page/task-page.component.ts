import { Component, OnInit } from '@angular/core';
import { groupBy } from 'rxjs/operators';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.module';

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

  private createDateSpecificList(taskData: Task[]) {
    const result: DateSpecificTask[] = taskData.map((item) => {
      return { date: this.getPresnetableDate(item["date"]), tasks: [] };
    });

    console.log(result);

    const uniqueResult = this.removeDuplicates(result);

    console.log("unique", uniqueResult);

    taskData.map((val, i) => {
      for (var i = 0; i < uniqueResult.length; i++) {
        if (this.arePresnetableDatesEquals(uniqueResult[i].date, this.getPresnetableDate(val.date))) {
          uniqueResult[i].tasks.push(val);
        }
      }
    });

    this.taskListByDate = uniqueResult;

  }

  private removeDuplicates(arr: DateSpecificTask[]): DateSpecificTask[] {
    let unique_array: DateSpecificTask[] = [];

    for (let i = 0; i < arr.length; i++) {

      let isAlreadyAdded: Boolean = false;

      for (let j = 0; j < unique_array.length; j++) {
        if (this.arePresnetableDatesEquals(unique_array[j].date, arr[i].date)) {
          isAlreadyAdded = true;
        }
      }

      if (!isAlreadyAdded) {
        unique_array.push(arr[i])
      }
    }
    return unique_array
  }


  private getPresnetableDate(date: Date): PresentableDate {
    return { date: date.getDate(), month: date.getMonth(), year: date.getFullYear() };
  }

  arePresnetableDatesEquals(date1: PresentableDate, date2: PresentableDate): boolean {
    return (date1.date === date2.date && date1.month === date2.month && date1.year === date2.year);
  }

}

export class PresentableDate {

  date: number;
  month: number;
  year: number;
}

export class DateSpecificTask {

  date: PresentableDate;
  tasks?: Task[];

}
