import { Component, OnInit, OnDestroy } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatDialog} from '@angular/material';
import { Project } from 'src/app/models/project.module';
import { TaskService } from 'src/app/services/task.service';
import { ProjectAddDialog } from 'src/app/shared/components/auto-complete-selector/add-dialog/add-dialog.component';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit, OnDestroy {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  projectList: Project[] = [];

  constructor(private taskService : TaskService,public dialog: MatDialog) { }

  ngOnInit() {
    this.taskService.projectListChanged.subscribe(
      (projectData: Project[]) => {
        this.projectList = projectData;
      }
    );
    this.taskService.pageProjectInit();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.taskService.addProject({name: value.trim()});
      // this.projectList.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(project: Project): void {
    const index = this.projectList.indexOf(project);

    if (index >= 0) {
      // this.projectList.splice(index, 1);
      this.taskService.deleteProject(project.id);
    }
  }

  ngOnDestroy(): void {
    // this.taskService.projectListChanged.unsubscribe();
  }

  onAddProject():void {
    const dialogRef = this.dialog.open(ProjectAddDialog, {
      width: '250px',
      data: {type:"Project"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = "sad";
    });
  }
}
