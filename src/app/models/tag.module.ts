import { Project } from "./project.module";

export class Tag {
    id?: string;
    name: string;
    color?: string;
    projects?: Project[]
}