import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Task } from 'src/app/models/task.module';
import { AutoCompleteSelectorComponent } from 'src/app/shared/components/auto-complete-selector/auto-complete-selector.component';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { TimePickerComponent } from 'src/app/shared/components/time-picker/time-picker.component';
import { DateTimeService } from 'src/app/services/date-time.service';

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

  ItemForm: FormGroup;

  descriptionField: String;

  constructor(private formBuilder: FormBuilder,private dateTimeService: DateTimeService) {
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
    });
  }

  private registerListeners() {
    this.ItemForm.get('descriptionField').valueChanges.subscribe(
      value => { console.log("descritption change", value); }
    );
    this.projectField.myControl.valueChanges.subscribe(
      value => { console.log("projectName change", value); }
    );

    this.tagField.myControl.valueChanges.subscribe(
      value => { console.log("tag change", value); }
    );

  }


}
