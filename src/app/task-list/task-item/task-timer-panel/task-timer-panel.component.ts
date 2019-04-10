import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-task-timer-panel',
  templateUrl: './task-timer-panel.component.html',
  styleUrls: ['./task-timer-panel.component.scss']
})
export class TaskTimerPanelComponent implements OnInit {
  private sub: Subscription;
  timerValue: string;
  timer: any;
  
  constructor() { }
  
  ngOnInit() {
   // this.oberserableTimer();
  }
  
  oberserableTimer() {
    this.timer = timer(1000,1000);
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
  }

  tickerFunc(tick){
    console.log(this);
      // Time calculations for days, hours, minutes and seconds
    let hours = Math.floor(tick / 60 / 60);
    let minutes = Math.floor(tick / 60) % 60;
    let seconds = Math.floor(tick - minutes * 60);

    this.timerValue = ` ${hours} h : ${minutes} m : ${seconds} s`

  }

  ngOnDestroy(){
    console.log("Destroy timer");
    // unsubscribe here
    this.sub.unsubscribe();
  }
}
