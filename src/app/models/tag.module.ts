import { Project } from "./project.module";

export class Tag {
    name: String;
    color?: String;
    projects?: Project[]
}