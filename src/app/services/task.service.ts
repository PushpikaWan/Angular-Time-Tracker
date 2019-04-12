import { Task } from "../task-list/task-item/task.module";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import Dexie from 'dexie';
import { UUID } from 'angular2-uuid';

@Injectable()
export class TaskService{

    private taskList: Task[] = [];
    private db: any;

    constructor(){
        this.createDatabase();
        this.updateItemFromIndexDB();
    }
    // taskList: Array<Task> = [];
    taskListChanged = new Subject;

    addTask( task: Task){
        task.id = UUID.UUID();
        this.addToIndexedDb(task);
        this.updateItemFromIndexDB();
    }

    getTasks(): Task[]{
        return this.taskList;
    }

    deleteTask(taskId : String){
        console.log("delete this",taskId);
        this.deleteItemsFromIndexedDb(taskId);
    }

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
    
       private async updateItemFromIndexDB() {
          const allItems: Task[] = await this.db.tasks.toArray();
          this.taskList =  allItems;
          console.log("updated senditems", allItems);
          this.taskListChanged.next(this.getTasks());
      }

      private async deleteItemsFromIndexedDb(id : String) {
        
        const allItems: Task[] = await this.db.tasks.toArray();
        // console.log("Delete this id",id);
        allItems.forEach((item: Task) => {
            if(item.id == id){
                this.db.tasks.delete(item.id).then(() => {
                    console.log(`item ${item.id} sent and deleted locally`);
                });
            }
        });
        this.updateItemFromIndexDB();
      }
}