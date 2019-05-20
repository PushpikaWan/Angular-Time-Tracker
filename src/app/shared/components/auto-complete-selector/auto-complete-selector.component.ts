import { Component, OnInit, Input, ViewEncapsulation, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Task } from 'src/app/models/task.modle';
import { TaskService } from 'src/app/services/task.service';
import { MatDialog } from '@angular/material';
import { ProjectAddDialog } from './add-dialog/add-dialog.component';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

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

  constructor(public dialog: MatDialog){
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
    if(this.options == undefined || this.options.length == 0){
      return;
    }
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  addClicked(){
    const dialogRef = this.dialog.open(ProjectAddDialog, {
      width: '250px',
      data: {type:this.placeHolderValue}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = "sad";
    });
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
