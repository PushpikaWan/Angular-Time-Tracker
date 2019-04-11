import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.module';

@Component({
  selector: 'app-task-description-panel',
  templateUrl: './task-description-panel.component.html',
  styleUrls: ['./task-description-panel.component.scss']
})
export class TaskDescriptionPanelComponent implements OnInit {

  @Input() task: Task;

  codeInput : String;
  descriptionInput : String;

  @ViewChild('taskcodAndDescriptionForm') taskForm: NgForm; 

  constructor() { }

  ngOnInit() {
    this.codeInput = this.task.code;
    this.descriptionInput = this.task.description;
  }

}
