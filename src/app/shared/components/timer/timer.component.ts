import { Component, OnInit, Input } from '@angular/core';
import { Subscription, timer } from 'rxjs';

import { Task } from 'src/app/models/task.module';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private sub: Subscription;
  timerValue: string;
  timer: any;

  @Input() task: Task;
  
  constructor(private timerService: TimerService) { 
    timerService.timerSetActive.subscribe(
      ( isStarted: Boolean) =>{
        if(!isStarted){
          this.oberserableTimer();
        }
        else{
          this.sub.unsubscribe();
        }
      }
    );
  }
  
  ngOnInit() {
  //  this.oberserableTimer();
  }
  
  oberserableTimer() {
    this.timer = timer(1000,1000);
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
  }

  tickerFunc(tick){
      // Time calculations for days, hours, minutes and seconds
    let hours = Math.floor(tick / 60 / 60);
    let minutes = Math.floor(tick / 60) % 60;
    let seconds = Math.floor(tick - (hours*60*60 + minutes * 60));

    this.timerValue = ` ${hours} h : ${minutes} m : ${seconds} s`

  }

  ngOnDestroy(){
    console.log("Destroy timer");
    // unsubscribe here
   // this.sub.unsubscribe();
  }

}
