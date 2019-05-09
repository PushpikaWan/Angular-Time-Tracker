import { Timer } from "./timer.module";
import { Project } from "./project.module";
import { Tag } from "./tag.module";
import { Time } from "./time.module";

export class Task{
    id?: string;
    description: string;
    project: Project
    tag: Tag
    timer: Timer;
    state?: string; 
    date? : Date;
    startTime? : Time;
    endTime? : Time;
    //replace with enum
}