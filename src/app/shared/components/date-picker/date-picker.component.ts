import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task.modle';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent implements OnInit {

  @Input() task : Task; 

  datePickerControl = new FormControl();

  constructor() { }

  ngOnInit() {
    
  }

}
