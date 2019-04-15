import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { Task } from 'src/app/models/task.module';
import { AutoCompleteSelectorComponent } from 'src/app/shared/components/auto-complete-selector/auto-complete-selector.component';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { TimePickerComponent } from 'src/app/shared/components/time-picker/time-picker.component';
import { DateTimeService } from 'src/app/services/date-time.service';
import { TaskService } from 'src/app/services/task.service';
import { TimerComponent } from 'src/app/shared/components/timer/timer.component';
import { DatePickerComponent } from 'src/app/shared/components/date-picker/date-picker.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() currentTask: Task;
  @ViewChild('projectField') projectField: AutoCompleteSelectorComponent;
  @ViewChild('tagField') tagField: AutoCompleteSelectorComponent;
  @ViewChild('startTimeField') startTimeField: TimePickerComponent;
  @ViewChild('endTimeField') endTimeField: TimePickerComponent;
  @ViewChild('dateField') dateField: DatePickerComponent;
  @ViewChild('timerField') timerField: TimerComponent;

  ItemForm: FormGroup;

  descriptionField: String;

  constructor(private formBuilder: FormBuilder,
              private taskService: TaskService,
              private dateTimeService: DateTimeService) {
  }

  ngOnInit() {
    if (this.currentTask === undefined) {
      return;
    }
    this.initializeValues();
    this.registerListeners();
  }

  private initializeValues() {
    this.ItemForm = this.formBuilder.group({
      descriptionField: this.currentTask.description,
      projectField: this.projectField.myControl.setValue(this.currentTask.project),
      tagField: this.tagField.myControl.setValue(this.currentTask.tag),
      startTimeField: this.startTimeField.timePickerControl.setValue(
        this.dateTimeService.convertTimeToString(this.currentTask.startTime)
      ),
      endTimeField: this.endTimeField.timePickerControl.setValue(
        this.dateTimeService.convertTimeToString(this.currentTask.endTime)
      ),
      dateField: this.dateField.datePickerControl.setValue(
        this.currentTask.date
      ),
    });
  }

  private registerListeners() {
    this.ItemForm.get('descriptionField').valueChanges.subscribe(
      value => { 
        console.log("descritption changed", value);
        this.currentTask.description = value;
        this.taskService.addTask(this.currentTask);
     }
    );
    this.projectField.myControl.valueChanges.subscribe(
      value => { 
        console.log("projectName changed", value); 
        this.currentTask.project = value;
        this.taskService.addTask(this.currentTask);
     }
    );

    this.tagField.myControl.valueChanges.subscribe(
      value => { 
        console.log("tag changed", value); 
        this.currentTask.tag = value;
        this.taskService.addTask(this.currentTask);
      }
    );

    this.startTimeField.timePickerControl.valueChanges.subscribe(
      value => { 
        console.log("starting time changed", value);
        this.refreshTimerValue();
        this.currentTask.startTime = this.dateTimeService.convertStringToTime(value);
        //changetimer value
        this.taskService.addTask(this.currentTask);
     }
    );

    this.endTimeField.timePickerControl.valueChanges.subscribe(
      value => { 
        console.log("end time changed", value); 
        this.refreshTimerValue();
        this.currentTask.endTime = this.dateTimeService.convertStringToTime(value);
         //changetimer value
        this.taskService.addTask(this.currentTask);
      }
    );

    this.dateField.datePickerControl.valueChanges.subscribe(
      value => { 
        console.log("date changed", value); 
        this.currentTask.date = value;
        this.taskService.addTask(this.currentTask);
      }
    );

  }

  private refreshTimerValue() {

  }

  private onDeleteItem(){
    if(window.confirm(`Are sure you want to delete this ${this.currentTask.description} item ?`)){
      //put your delete method logic here
      this.taskService.deleteTask(this.currentTask.id);
     }
  }

}
