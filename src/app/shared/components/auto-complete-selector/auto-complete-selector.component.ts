import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Task } from 'src/app/models/task.module';

@Component({
  selector: 'app-auto-complete-selector',
  templateUrl: './auto-complete-selector.component.html',
  styleUrls: ['./auto-complete-selector.component.scss']
})
export class AutoCompleteSelectorComponent implements OnInit {
  @Input() placeHolderValue : String; 
  @Input() task : Task; 
  
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  
  constructor(){
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe( startWith(''),map(value => this._filter(value)));
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  addClicked(){
    console.log("clicked");
  }
}
