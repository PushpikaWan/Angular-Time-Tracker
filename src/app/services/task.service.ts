import { Subject } from "rxjs";
import { UUID } from 'angular2-uuid';
import Dexie from 'dexie';

import { Task } from "../models/task.module";
import { Injectable } from "@angular/core";
import { MyToastService } from "./toastr.service";
import { Project } from "../models/project.module";

@Injectable()
export class TaskService {

  //todo remove all duplicates

  private taskList: Task[] = [];
  private projectList: Project[] = [];
  private db: any;

  constructor(private toastr: MyToastService) {
    this.createDatabase();
  }

  pageTaskInit() {
    this.updateTaskItemFromIndexDB();
  }

  pageProjectInit() {
    this.updateProjectItemFromIndexDB();
  }
  // taskList: Array<Task> = [];
  taskListChanged = new Subject;
  projectListChanged = new Subject;

  addTask(task: Task) {
    const isUpdate: boolean = (task.id !== undefined);
    task.id = (isUpdate ? task.id : UUID.UUID());
    console.log("key", task.id);
    this.addTaskToIndexedDb(task, isUpdate);
    this.updateTaskItemFromIndexDB();
  }

  addProject(project: Project) {
    project.id = UUID.UUID();
    console.log("key", project.id);
    this.addProjectToIndexedDb(project);
    this.updateProjectItemFromIndexDB();
  }


  getTasks(): Task[] {
    return this.taskList;
  }

  getProjects(): Project[] {
    return this.projectList;
  }

  deleteTask(taskId: String) {
    this.deleteTaskItemsFromIndexedDb(taskId);
  }

  deleteProject(projectId: String) {
    this.deleteProjectItemsFromIndexedDb(projectId);
  }

  private createDatabase() {
    this.db = new Dexie('MyTestDatabase');
    this.db.version(1).stores({
      tasks: 'id,value',
      projects: 'id,value',
      tags: 'id,value'
    });
  }

  private addTaskToIndexedDb(task: Task, isUpdate: boolean) {
    this.db.tasks
      .put(task)
      .then(async () => {
        const allItems: Task[] = await this.db.tasks.toArray();
        console.log('saved in DB, DB is now', allItems);
        this.toastr.showSuccess(isUpdate ? "Record updated" : "Record added");
      })
      .catch(e => {
        alert('Error: ' + (e.stack || e));
      });
  }
  private addProjectToIndexedDb(project: Project) {
    this.db.projects
      .put(project)
      .then(async () => {
        const allItems: Project[] = await this.db.projects.toArray();
        console.log('saved in DB, DB is now', allItems);
        this.toastr.showSuccess("Project added");
      })
      .catch(e => {
        alert('Error: ' + (e.stack || e));
      });
  }

  private async updateTaskItemFromIndexDB() {
    const allItems: Task[] = await this.db.tasks.toArray();
    this.taskList = allItems;
    this.taskListChanged.next(this.getTasks());
  }

  private async updateProjectItemFromIndexDB() {
    const allItems: Project[] = await this.db.projects.toArray();
    this.projectList = allItems;
    this.projectListChanged.next(this.getProjects());
  }

  private async deleteTaskItemsFromIndexedDb(id: String) {

    const allItems: Task[] = await this.db.tasks.toArray();
    // console.log("Delete this id",id);
    allItems.forEach((item: Task) => {
      if (item.id == id) {
        this.db.tasks.delete(item.id).then(() => {
          // console.log(`item ${item.id} sent and deleted locally`);
          this.toastr.showDanger("Record deleted");
        });
      }
    });
    this.updateTaskItemFromIndexDB();
  }

  private async deleteProjectItemsFromIndexedDb(id: String) {

    const allItems: Project[] = await this.db.projects.toArray();
    // console.log("Delete this id",id);
    allItems.forEach((item: Project) => {
      if (item.id == id) {
        this.db.projects.delete(item.id).then(() => {
          // console.log(`item ${item.id} sent and deleted locally`);
          this.toastr.showDanger("Record deleted");
        });
      }
    });
    this.updateProjectItemFromIndexDB();
  }

  //this is used to get project object by assuming name is unique
  public getProjectByName(name: string): Project {
    let selectedItem:Project;
    this.projectList.forEach((item: Project) => {
      if (item.name === name) {
        selectedItem = item;
        return; 
      }
    });
    return selectedItem != undefined?  selectedItem:{name:"name"}; // this is for safe 
  }
}