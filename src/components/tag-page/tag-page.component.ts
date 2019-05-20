import { Component, OnInit, OnDestroy } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatDialog} from '@angular/material';
import { TaskService } from 'src/app/services/task.service';
import { ProjectAddDialog } from 'src/app/shared/components/auto-complete-selector/add-dialog/add-dialog.component';
import { Tag } from 'src/app/models/tag.model';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss']
})
export class TagPageComponent implements OnInit, OnDestroy {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tagList: Tag[] = [];

  constructor(private taskService : TaskService,public dialog: MatDialog) { }

  ngOnInit() {
    this.taskService.tagListChanged.subscribe(
      (tagData: Tag[]) => {
        console.log("tag data",tagData);
        this.tagList = tagData;
      }
    );
    this.taskService.pageTagInit();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.taskService.addTag({name: value.trim()});
      // this.projectList.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tagList.indexOf(tag);

    if (index >= 0) {
      // this.projectList.splice(index, 1);
      this.taskService.deleteTag(tag.id);
    }
  }

  ngOnDestroy(): void {
    // this.taskService.projectListChanged.unsubscribe();
  }

  onAddTag():void {
    const dialogRef = this.dialog.open(ProjectAddDialog, {
      width: '250px',
      data: {type:"Tag"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = "sad";
    });
  }
}

