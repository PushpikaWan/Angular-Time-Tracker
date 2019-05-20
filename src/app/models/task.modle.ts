import { Timer } from "./timer.modle";
import { Project } from "./project.model";
import { Tag } from "./tag.model";
import { Time } from "./time.modle";

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