import { Subject } from "rxjs";
import { Timer } from "../models/timer.module";
import { Time } from "../models/time.module";

export class DateTimeService {

  /**
   *  this will return boolean value according to the state of timer
   * if start timer click this return true otherwise false
   * */
  timerStateChanged = new Subject;

  dateStateChanged = new Subject;
  TimeStateChanged = new Subject;

  convertTimerToString(timer: Timer): String {
    return ` ${timer.hours} h : ${timer.minutes} min : ${timer.seconds} s`;
  }

  convertTimeToString(time: Time): String {
    return `${time.hours}:${time.minutes}:${time.seconds}`;
  }

  convertStringToTime(timeString: String): Time {
    const [time, modifier] = timeString.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (hours === 12) {
      hours = 0;
    }

    if (modifier.trim().toLowerCase() === 'pm') {
      hours = hours + 12;
    }
    console.log("modifire", modifier);
    return { hours: hours, minutes: minutes };
  }

  getTimeDiff(time1: Time, time2: Time): Time {
    //check isbefore first then minus value will be not there
    let diffMins: number = this.getDiffInMins(time1, time2);
    return { hours: Math.floor(diffMins / 60), minutes: (diffMins % 60), seconds:0 }
  }

  isBefore(time1: Time, time2: Time): Boolean {
    return this.getDiffInMins(time1,time2) > 0;
  }

  isFuture(date: Date, time: Time): Boolean {
    let currentDate: Date = new Date();
    if(currentDate < date){
      return true;
    }
    if(currentDate.getFullYear() == date.getFullYear()
       && currentDate.getMonth() == date.getMonth() 
       && currentDate.getDate() == date.getDate()){
      return this.isBefore({hours:currentDate.getHours(),minutes: currentDate.getMinutes()},time);
    }
    return false;
  }

  private getDiffInMins(time1: Time, time2: Time) {
    let time1Mins: number = time1.hours * 60 + time1.minutes;
    let time2Mins: number = time2.hours * 60 + time2.minutes;
    let diffMins: number = time2Mins - time1Mins;
    return diffMins;
  }

  

  // convertStringToTimer: Timer{

  // }

  // convertDateToString(): String{

  //   return "";
  // }

  // convertStringToDate(): Date{

  //   return new Date();
  // }

  // convertTimeToString(): String{

  //   return "";
  // }

  // convertStringToTime(): Time{

  //   return new Time();
  // }

}