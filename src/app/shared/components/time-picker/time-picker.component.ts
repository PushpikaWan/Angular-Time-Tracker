import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task.module';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {

  @Input() task : Task; 

  constructor() { 
    
  }

  ngOnInit() {
  }

}
