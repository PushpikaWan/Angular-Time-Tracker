import { TimerDateTime } from "./task-timer-panel/timer-dateTime-module";

export class Task{
    code: String;
    description: String;
    time?: TimerDateTime;
    state?: String; //replace with enum
}