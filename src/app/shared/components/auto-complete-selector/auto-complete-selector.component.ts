import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Task } from 'src/app/models/task.module';

@Component({
  selector: 'app-auto-complete-selector',
  templateUrl: './auto-complete-selector.component.html',
  styleUrls: ['./auto-complete-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AutoCompleteSelectorComponent implements OnInit {
  @Input() placeHolderValue : String; 
  @Input() task : Task; 

  myForm : FormGroup;

  myControl = new FormControl();
  myOptionControl= new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  private selectedValue: String;
  
  constructor(){
  }
  ngOnInit() {
    this.filteredOptions = this.myOptionControl.valueChanges
    .pipe( startWith(''),map(value => this._filter(value)));
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  addClicked(){
    console.log("clicked");
  }
  defaultItemClicked(){
    console.log("default item clicked");
    this.selectedValue = undefined;
  }
  selectItem(item : String){
    this.selectedValue = item;
    console.log("selected item",this.myControl.value);
  }
}
