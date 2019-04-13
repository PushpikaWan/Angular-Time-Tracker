import { Timer } from "./timer.module";
import { Project } from "./project.module";
import { Tag } from "./tag.module";

export class Task{
    id?: String;
    description: String;
    project?: Project
    tag?: Tag
    time?: Timer;
    state?: String; //replace with enum
}