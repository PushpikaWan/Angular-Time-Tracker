import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task.module';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input() task : Task; 

  constructor() { }

  ngOnInit() {
    
  }

}
