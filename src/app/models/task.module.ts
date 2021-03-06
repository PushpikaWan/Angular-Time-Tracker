import { Timer } from "./timer.module";
import { Project } from "./project.module";
import { Tag } from "./tag.module";
import { Time } from "./time.module";

export class Task{
    id?: String;
    description: String;
    project: Project
    tag: Tag
    timer: Timer;
    state?: String; 
    date? : Date;
    startTime? : Time;
    endTime? : Time;
    //replace with enum
}