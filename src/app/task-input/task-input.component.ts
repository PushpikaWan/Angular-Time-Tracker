import { Component, OnInit, SimpleChanges, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';
import { DateTimeService } from '../services/date-time.service';
import { NgForm, FormControl } from '@angular/forms';
import { AutoCompleteSelectorComponent } from '../shared/components/auto-complete-selector/auto-complete-selector.component';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.module';
import { TimerComponent } from '../shared/components/timer/timer.component';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  @ViewChild('projectField') projectField : AutoCompleteSelectorComponent;
  @ViewChild('tagField') tagField : AutoCompleteSelectorComponent;
  @ViewChild('taskField') taskField : ElementRef;
  @ViewChild('timerField') timerField : TimerComponent;

  isStarted : boolean = false;

  constructor(private taskService: TaskService,private dateTimeService: DateTimeService) { }

  ngOnInit() {
  
  }

  onStartClick(){
    console.log("sd");
    if(this.isStarted){
      this.dateTimeService.timerStateChanged.next(this.isStarted);
      if(this.isValidData()){
          this.saveData(); 
      }
    }
    else{
      //startTimer
      this.dateTimeService.timerStateChanged.next(this.isStarted);
    }
    this.isStarted = !this.isStarted;
  }

   private isValidData() : Boolean{
      console.log("project ref",this.projectField.myControl.value);
      console.log("tag ref",this.tagField.myControl.value);
      console.log("task ref",this.taskField.nativeElement.value);
      console.log("timer ref",this.timerField.timerString);
      return true;
    }

    private saveData(){
      this.taskService.addTask({
          description:this.taskField.nativeElement.value,
          project:this.projectField.myControl.value,
          tag:this.tagField.myControl.value,
          timer:this.timerField.timerValue
        });
    }

}
