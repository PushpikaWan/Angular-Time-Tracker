import { Project } from "./project.model";

export class Tag {
    id?: string;
    name: string;
    color?: string;
    projects?: Project[]
}