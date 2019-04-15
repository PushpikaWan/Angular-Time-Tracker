import { Subject } from "rxjs";
import { Timer } from "../models/timer.module";
import { Time } from "../models/time.module";

export class DateTimeService{

  /**
   *  this will return boolean value according to the state of timer
   * if start timer click this return true otherwise false
   * */
  timerStateChanged = new Subject;

  dateStateChanged = new Subject;
  TimeStateChanged = new Subject;

  convertTimerToString(timer: Timer): String{
    return ` ${timer.hours} h : ${timer.minutes} min : ${timer.seconds} s`;
  }

  convertTimeToString(time: Time): String{
    return `${time.hours}:${time.minutes}:${time.seconds}`;
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