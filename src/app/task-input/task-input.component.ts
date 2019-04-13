import { Component, OnInit } from '@angular/core';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  isStarted : boolean = false;

  constructor(private timerService: TimerService) { }

  ngOnInit() {

  }

  onStartClick(){
    console.log("sd");
    if(this.isStarted){
      this.timerService.timerSetActive.next(this.isStarted);
    }
    else{
      //startTimer
      this.timerService.timerSetActive.next(this.isStarted);
    }
    this.isStarted = !this.isStarted;
  }

}
