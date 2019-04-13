import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from './shared/material.module';


import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { DatePickerComponent } from './shared/components/date-picker/date-picker.component';
import { TimePickerComponent } from './shared/components/time-picker/time-picker.component';
import { TimerComponent } from './shared/components/timer/timer.component';
import { AutoCompleteSelectorComponent } from './shared/components/auto-complete-selector/auto-complete-selector.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    TimePickerComponent,
    TimerComponent,
    AutoCompleteSelectorComponent,
    TaskInputComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
