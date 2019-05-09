import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TaskService } from 'src/app/services/task.service';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

export interface DialogData {
  type: string;
  color?: string;
}

@Component({
    selector: 'add-dialog',
    templateUrl: 'add-dialog.component.html',
  })
  export class ProjectAddDialog {
    @ViewChild('nameInput') nameInput : ElementRef;
    @ViewChild('colorInput') colorInput : ElementRef;

    constructor(
      public dialogRef: MatDialogRef<ProjectAddDialog>,
      private taskService: TaskService,
      private cpService: ColorPickerService,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    onCreateItem():void{
        console.log("name input",this.nameInput.nativeElement.value);
        console.log("color input",this.colorInput.nativeElement.colorPicker);
        this.taskService.addProject({name:this.nameInput.nativeElement.value, color:"test"});
    }

    public onEventLog(event: string, data: any): void {
        console.log(event, data);
      }

  }