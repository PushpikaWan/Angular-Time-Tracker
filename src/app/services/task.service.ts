import { Task } from "../task-list/task-item/task.module";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import Dexie from 'dexie';
import { UUID } from 'angular2-uuid';

import { DataHandlingService } from "./dbServices/data-handling.service";

@Injectable()
export class TaskService{

    private taskList: Task[] = [];
    private db: any;

    constructor(){
        this.createDatabase();
    }
    // taskList: Array<Task> = [];
    taskListChanged = new Subject;

    addTask( task: Task){
        task.id = UUID.UUID();
        this.addToIndexedDb(task);
        this.sendItemsFromIndexedDb();
    }

    getTasks(): Task[]{
        return this.taskList;
    }


    ////////////////////////////////////////////////////

    private createDatabase() {
        this.db = new Dexie('MyTestDatabase');
        this.db.version(1).stores({
          tasks: 'id,value'
        });
      }

      private addToIndexedDb(task: Task) {
        this.db.tasks
          .add(task)
          .then(async () => {
            const allItems: Task[] = await this.db.tasks.toArray();
            console.log('saved in DB, DB is now', allItems);
          })
          .catch(e => {
            alert('Error: ' + (e.stack || e));
          });
      }
    
       private async sendItemsFromIndexedDb() {
          const allItems: Task[] = await this.db.tasks.toArray();
          this.taskList =  allItems;
          console.log("updated senditems", allItems);
          this.taskListChanged.next(this.getTasks());

      }
      

}