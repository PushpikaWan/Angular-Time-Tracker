import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Task } from 'src/app/models/task.module';
import { AutoCompleteSelectorComponent } from 'src/app/shared/components/auto-complete-selector/auto-complete-selector.component';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
 
  @Input() currentTask: Task;
  @ViewChild('projectField') projectField : AutoCompleteSelectorComponent;
  @ViewChild('tagField') tagField : AutoCompleteSelectorComponent;

  ItemForm : FormGroup;

  descriptionField : String;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    if(this.currentTask === undefined){
      return;
    }
    this.initializeValues();
    this.registerListeners();
  }

  private initializeValues(){
    this.ItemForm = this.formBuilder.group({
      descriptionField:this.currentTask.description,
      projectField:this.projectField.myControl.setValue(this.currentTask.project),
      tagField:this.tagField.myControl.setValue(this.currentTask.tag),
    });
  }

  private registerListeners(){
    this.ItemForm.get('descriptionField').valueChanges.subscribe(
       value => {console.log("changed",value);}
    );
  this.ItemForm.get('projectField').valueChanges.subscribe(
      value => {console.log("changed",value);}
   );

    console.log("in listener",this.ItemForm);
  }


}
