import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from './shared/material.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { DatePickerComponent } from './shared/components/date-picker/date-picker.component';
import { TimePickerComponent } from './shared/components/time-picker/time-picker.component';
import { TimerComponent } from './shared/components/timer/timer.component';
import { AutoCompleteSelectorComponent } from './shared/components/auto-complete-selector/auto-complete-selector.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { DateTimeService } from './services/date-time.service';
import { TaskPageComponent } from './task-page/task-page.component';
import { TaskListComponent } from './task-page/task-list/task-list.component';
import { TaskItemComponent } from './task-page/task-list/task-item/task-item.component';
import { SelectSearchComponent } from './shared/components/select-search/select-search.component';


@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    TimePickerComponent,
    TimerComponent,
    AutoCompleteSelectorComponent,
    TaskInputComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskPageComponent,
    SelectSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule
  ],
  providers: [
    TaskService,
    DateTimeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
