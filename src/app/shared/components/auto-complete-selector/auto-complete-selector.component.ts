import { Component, OnInit, Input, ViewEncapsulation, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Task } from 'src/app/models/task.module';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-auto-complete-selector',
  templateUrl: './auto-complete-selector.component.html',
  styleUrls: ['./auto-complete-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AutoCompleteSelectorComponent implements OnInit {
  @Input() placeHolderValue : string; 
  @Input() task : Task; 
  @Input() autoCompleteItem : AutoCompleteItem[];

  myForm : FormGroup;

  myControl = new FormControl();
  myOptionControl= new FormControl();
  options: AutoCompleteItem[] = [];
  filteredOptions: Observable<AutoCompleteItem[]>;

  constructor(){
  }

  ngOnInit() {
    this.filteredOptions = this.myOptionControl.valueChanges
    .pipe( startWith(''),map(value => this._filter(value)));
  }

  ngOnChanges(changes: SimpleChanges) {
    const name: SimpleChange = changes.autoCompleteItem;
    // console.log('prev value: ', name.previousValue);
    this.options = name.currentValue;
    //this is used to filter forcefully 
    this.myOptionControl.setValue('');
  }
  
  private _filter(value: string): AutoCompleteItem[] {
    console.log("search string", value);
    if(this.options == undefined || this.options.length == 0){
      return;
    }
    const filterValue = value.toLowerCase();
    console.log("filter value",filterValue);
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  addClicked(){
    console.log("clicked");
  }
  defaultItemClicked(){
    console.log("default item clicked");
    console.log("def",this.myControl.value);
  }

}

export interface AutoCompleteItem{

  id: string;
  name: string;
  type : string; //change this to enum
  color?: string;
}
