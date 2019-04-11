import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Task } from '../task-list/task-item/task.module';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  @ViewChild('myForm') taskForm: NgForm; 
  code: String;
  description: String;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.code = this.taskForm.value.code;
    this.description = this.taskForm.value.description;
    console.log(this.code);
    console.log(this.description);
    this.taskService.addTask({code: this.code, description: this.description});
    this.taskForm.reset();
  }

}
