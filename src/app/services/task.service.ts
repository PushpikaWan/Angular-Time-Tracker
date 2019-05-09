import { Subject } from "rxjs";
import { UUID } from 'angular2-uuid';
import Dexie from 'dexie';

import { Task } from "../models/task.module";
import { Injectable } from "@angular/core";
import { MyToastService } from "./toastr.service";
import { Project } from "../models/project.module";
import { Tag } from "../models/tag.module";

@Injectable()
export class TaskService {

  //todo remove all duplicates

  private taskList: Task[] = [];
  private projectList: Project[] = [];
  private tagList: Tag[] = [];
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

  pageTagInit() {
    this.updateTagItemFromIndexDB();
  }
  // taskList: Array<Task> = [];
  taskListChanged = new Subject;
  projectListChanged = new Subject;
  tagListChanged = new Subject;

  addTask(task: Task) {
    const isUpdate: boolean = (task.id !== undefined);
    task.id = (isUpdate ? task.id : UUID.UUID());
    this.addTaskToIndexedDb(task, isUpdate);
    this.updateTaskItemFromIndexDB();
  }

  addProject(project: Project) {
    project.id = UUID.UUID();
    this.addProjectToIndexedDb(project);
    this.updateProjectItemFromIndexDB();
  }

  addTag(tag: Tag) {
    tag.id = UUID.UUID();
    this.addTagToIndexedDb(tag);
    this.updateTagItemFromIndexDB();
  }



  getTasks(): Task[] {
    return this.taskList;
  }

  getProjects(): Project[] {
    return this.projectList;
  }

  getTags(): Tag[] {
    return this.tagList;
  }

  deleteTask(taskId: string) {
    this.deleteTaskItemsFromIndexedDb(taskId);
  }

  deleteProject(projectId: string) {
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
        this.toastr.showSuccess("Project added");
      })
      .catch(e => {
        alert('Error: ' + (e.stack || e));
      });
  }

  private addTagToIndexedDb(tag: Tag) {
    this.db.tags
      .put(tag)
      .then(async () => {
        const allItems: Tag[] = await this.db.tags.toArray();
        this.toastr.showSuccess("Tag added");
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

  private async updateTagItemFromIndexDB() {
    const allItems: Tag[] = await this.db.tags.toArray();
    this.tagList = allItems;
    this.tagListChanged.next(this.getTags());
  }

  private async deleteTaskItemsFromIndexedDb(id: string) {

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

  private async deleteProjectItemsFromIndexedDb(id: string) {

    const allItems: Project[] = await this.db.projects.toArray();
    // console.log("Delete this id",id);
    allItems.forEach((item: Project) => {
      if (item.id == id) {
        this.db.projects.delete(item.id).then(() => {
          // console.log(`item ${item.id} sent and deleted locally`);
          this.toastr.showDanger("Project deleted");
        });
      }
    });
    this.updateProjectItemFromIndexDB();
  }

  private async deleteTagItemsFromIndexedDb(id: string) {

    const allItems: Tag[] = await this.db.tags.toArray();
    // console.log("Delete this id",id);
    allItems.forEach((item: Tag) => {
      if (item.id == id) {
        this.db.tags.delete(item.id).then(() => {
          // console.log(`item ${item.id} sent and deleted locally`);
          this.toastr.showDanger("Tag deleted");
        });
      }
    });
    this.updateTagItemFromIndexDB();
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