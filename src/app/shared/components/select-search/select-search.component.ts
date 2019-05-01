import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, ReplaySubject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil, take } from 'rxjs/operators';
import { Task } from 'src/app/models/task.module';

interface Bank {
  id: string;
  name: string;
 }

@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss']
})

export class SelectSearchComponent implements OnInit, OnDestroy, AfterViewInit {

  /** control for the selected bank */
  public selectCtrl: FormControl = new FormControl();

   /** control for the MatSelect filter keyword */
  public selectFilterCtrl: FormControl = new FormControl();


  @Input() placeHolderValue : String; 
  @Input() task : Task; 

  /** list of banks */
  private banks: Bank[] = [
    {name: 'Bank A (Switzerland) zxfsdfsdfsdfsd', id: 'A'},
    {name: 'Bank B (Switzerland)', id: 'B'},
    {name: 'Bank C (France)', id: 'C'},
    {name: 'Bank D (France)', id: 'D'},
    {name: 'Bank E (France)', id: 'E'},
    {name: 'Bank F (Italy)', id: 'F'},
    {name: 'Bank G (Italy)', id: 'G'},
    {name: 'Bank H (Italy)', id: 'H'},
    {name: 'Bank I (Italy)', id: 'I'},
    {name: 'Bank J (Italy)', id: 'J'},
    {name: 'Bank K (Italy)', id: 'K'},
    {name: 'Bank L (Germany)', id: 'L'},
    {name: 'Bank M (Germany)', id: 'M'},
    {name: 'Bank N (Germany)', id: 'N'},
    {name: 'Bank O (Germany)', id: 'O'},
    {name: 'Bank P (Germany)', id: 'P'},
    {name: 'Bank Q (Germany)', id: 'Q'},
    {name: 'Bank R (Germany)', id: 'R'} 
  ]

  /** list of banks filtered by search keyword */
  public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect; 

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  ngOnInit() {
    // set initial selection
    this.selectCtrl.setValue(this.banks[10]);

    // load the initial bank list
    this.filteredBanks.next(this.banks.slice());

    // listen for search field value changes
    this.selectFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });

  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  private setInitialValue() {
    this.filteredBanks
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: Bank, b: Bank) => a.id === b.id;
        console.log("set initial val");
      });
  }

  private filterBanks() {
    console.log("filter banks:",this.selectFilterCtrl.value);
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.selectFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.banks.slice());
      console.log("che1",search);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks.next(
      this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
      );
  }

  private addClicked(){
    this.selectFilterCtrl.setValue("");
    console.log("add clicked");
  }

}