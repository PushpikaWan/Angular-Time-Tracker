import { Task } from "../task-list/task-item/task.module";
import { Subject } from "rxjs";

export class TaskService{

    taskList: Array<Task> = [];
    taskListChanged = new Subject

    addTask( task: Task){
        this.taskList.push(task);
    }

    getTasks():Task[]{
        return this.taskList;
    }

}