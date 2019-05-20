import { Component, OnInit, SimpleChanges, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';
import { NgForm, FormControl } from '@angular/forms';
import { AutoCompleteSelectorComponent, AutoCompleteItem } from 'src/app/shared/components/auto-complete-selector/auto-complete-selector.component';
import { TimerComponent } from 'src/app/shared/components/timer/timer.component';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.modle';
import { DateTimeService } from 'src/app/services/date-time.service';
import { Project } from 'src/app/models/project.model';
import { projection } from '@angular/core/src/render3';
import { Tag } from 'src/app/models/tag.model';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  @ViewChild('projectField') projectField: AutoCompleteSelectorComponent;
  @ViewChild('tagField') tagField: AutoCompleteSelectorComponent;
  @ViewChild('taskField') taskField: ElementRef;
  @ViewChild('timerField') timerField: TimerComponent;

  descriptionControl: FormControl = new FormControl();

  isStarted: boolean = false;
  //this selected item is null until it call from exsisting record
  selectedItem: Task;
  autoCompleteProjectItems : AutoCompleteItem[];
  autoCompleteTagItems : AutoCompleteItem[];

  constructor(private taskService: TaskService, private dateTimeService: DateTimeService) {
    this.taskService.projectListChanged.subscribe(
      (projectData: Project[]) => {
        this.setProjectsList(projectData);
      }
    );
    this.taskService.tagListChanged.subscribe(
      (tagData: Tag[]) => {
       this.setTagsList(tagData);
      }
    );
    this.taskService.pageProjectInit();
   }

  ngOnInit() {
    this.dateTimeService.continueItemChanged.subscribe(
      (selectedTask) => this.setDataAndStrat(selectedTask)
    );
  }
  setDataAndStrat(selectedTask: {}) {
    this.selectedItem = <Task>selectedTask;
    console.log("got...->", this.selectedItem.timer);
    this.descriptionControl.setValue(this.selectedItem.description);
    this.projectField.myControl.setValue(this.selectedItem.project);
    this.tagField.myControl.setValue(this.selectedItem.tag);
    this.onStartClick();
  }

  onStartClick() {
    console.log("sd");
    if (this.isStarted) {
      this.dateTimeService.timerStateChanged.next(this.isStarted);
      if (this.isValidData()) {
        this.saveData();
        this.resetData();
      }
    }
    else {
      //startTimer
      this.dateTimeService.timerStateChanged.next(this.isStarted);
    }
    this.isStarted = !this.isStarted;
  }

  private resetData(): any {

    this.descriptionControl.reset();
    this.projectField.myControl.reset();
    this.tagField.myControl.reset();
    this.timerField.resetTimer();
  }

  private isValidData(): Boolean {
    console.log("project ref", this.projectField.myControl.value);
    console.log("tag ref", this.tagField.myControl.value);
    console.log("task ref", this.taskField.nativeElement.value);
    console.log("timer ref", this.timerField.timerString);
    return true;
  }

  private saveData() {
    this.taskService.addTask({
      description: this.taskField.nativeElement.value,
      project:this.projectField.myControl.value,
      tag: this.tagField.myControl.value,
      date: (this.selectedItem !== undefined ? this.selectedItem.date : new Date()),
      timer: this.timerField.timerValue,
      startTime: this.timerField.startTime,
      endTime: this.timerField.endTime,
    });
  }

  private setProjectsList(projectList: Project[]){
    this.autoCompleteProjectItems = projectList.map((item) => {
      return { id:item.id, name:item.name, type:"PROJECT",color:item.color};
    });
  }

  private setTagsList(tagList: Tag[]){
   this.autoCompleteTagItems = tagList.map((item) => {
      return { id:item.id, name:item.name, type:"TAG",color:item.color};
    });
  }

}
