import { Component, OnInit, Input } from '@angular/core';
import { Subscription, timer } from 'rxjs';

import { Task } from 'src/app/models/task.modle';
import { DateTimeService } from 'src/app/services/date-time.service';
import { Timer } from 'src/app/models/timer.modle';
import { Time } from 'src/app/models/time.modle';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit {

  private sub: Subscription;
  timerValue: Timer =  {hours:0, minutes:0, seconds:0};
  timerString: string;
  startTime: Time;
  endTime: Time;
  timer: any;

  @Input() task: Task;
  isEditDisable: boolean =true;
  
  constructor(private dateTimeService: DateTimeService) { 
    this.timerString = dateTimeService.convertTimerToString(this.timerValue);
  }
  
  ngOnInit() {
    //set value when value is there 
    if(this.task != undefined){
      this.timerValue = {
        hours:this.task.timer.hours, 
        minutes:this.task.timer.minutes, 
        seconds:this.task.timer.seconds};
      this.timerString = this.dateTimeService.convertTimerToString(this.timerValue); 
      return;
    }
    //do current input task related operations here
    this.isEditDisable = false;
    this.dateTimeService.timerStateChanged.subscribe(
      ( isStarted: Boolean) =>{
        if(!isStarted){
          this.oberserableTimer();
          let currentDate: Date = new Date();
          this.startTime = {
            hours:currentDate.getHours(), 
            minutes: currentDate.getMinutes(),
            seconds: currentDate.getSeconds()
          }; 
        }
        else{
          this.sub.unsubscribe();
          let currentDate: Date = new Date();
          this.endTime = {
            hours:currentDate.getHours(), 
            minutes: currentDate.getMinutes(),
            seconds: currentDate.getSeconds()
          }; 
        }
      }
    );
  }
  
  oberserableTimer() {
    if(this.isEditDisable){
      return;
    }
    this.timer = timer(1000,1000);
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
  }

  tickerFunc(tick){
      // Time calculations for days, hours, minutes and seconds
    let hours = Math.floor(tick / 60 / 60);
    let minutes = Math.floor(tick / 60) % 60;
    let seconds = Math.floor(tick - (hours*60*60 + minutes * 60));

    this.updateTimer({hours:hours, minutes:minutes, seconds:seconds});
  }

  ngOnDestroy(){
    console.log("Destroy timer");
    // unsubscribe here
   // this.sub.unsubscribe();
  }

  resetTimer(){
    this.updateTimer({hours:0, minutes:0, seconds:0});
  }

  private updateTimer(timeVal: {hours:number, minutes:number, seconds: number }){
    this.timerValue = {hours:timeVal.hours, minutes:timeVal.minutes, seconds:timeVal.seconds};
    this.timerString = this.dateTimeService.convertTimerToString(this.timerValue);
    console.log("reset timer",this.timerString);
  }
}
