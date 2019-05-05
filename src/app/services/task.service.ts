import { Subject } from "rxjs";
import { UUID } from 'angular2-uuid';
import Dexie from 'dexie';

import { Task } from "../models/task.module";
import { Injectable } from "@angular/core";
import { MyToastService } from "./toastr.service";

@Injectable()
export class TaskService{

    private taskList: Task[] = [];
    private db: any;

    constructor(private toastr: MyToastService){
        this.createDatabase();
        this.updateItemFromIndexDB();
    }
    // taskList: Array<Task> = [];
    taskListChanged = new Subject;

    addTask( task: Task){
        const isUpdate: boolean = (task.id !== undefined);
        task.id = (isUpdate? task.id:UUID.UUID());
        console.log("key",task.id);
        this.addToIndexedDb(task,isUpdate);
        this.updateItemFromIndexDB();
    }


    getTasks(): Task[]{
        return this.taskList;
    }

    deleteTask(taskId : String){
        this.deleteItemsFromIndexedDb(taskId);
    }

    private createDatabase() {
        this.db = new Dexie('MyTestDatabase');
        this.db.version(1).stores({
          tasks: 'id,value'
        });
      }

      private addToIndexedDb(task: Task, isUpdate:boolean) {
        this.db.tasks
          .put(task)
          .then(async () => {
            const allItems: Task[] = await this.db.tasks.toArray();
            console.log('saved in DB, DB is now', allItems);
            this.toastr.showSuccess(isUpdate ? "Record updated":"Record added");
          })
          .catch(e => {
            alert('Error: ' + (e.stack || e));
          });
      }
    
       private async updateItemFromIndexDB() {
          const allItems: Task[] = await this.db.tasks.toArray();
          this.taskList =  allItems;
          this.taskListChanged.next(this.getTasks());
      }

      private async deleteItemsFromIndexedDb(id : String) {
        
        const allItems: Task[] = await this.db.tasks.toArray();
        // console.log("Delete this id",id);
        allItems.forEach((item: Task) => {
            if(item.id == id){
                this.db.tasks.delete(item.id).then(() => {
                    // console.log(`item ${item.id} sent and deleted locally`);
                    this.toastr.showDanger("Record deleted");
                });
            }
        });
        this.updateItemFromIndexDB();
      }
}