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
import { DateTimeService } from './services/date-time.service';
import { SelectSearchComponent } from './shared/components/select-search/select-search.component';
import { TaskListComponent } from 'src/components/task-page/task-list/task-list.component';
import { TaskInputComponent } from 'src/components/task-page/task-input/task-input.component';
import { TaskItemComponent } from 'src/components/task-page/task-list/task-item/task-item.component';
import { TaskPageComponent } from 'src/components/task-page/task-page.component';
import { SideBarComponent } from 'src/components/side-bar/side-bar.component';
import { NavBarComponent } from 'src/components/nav-bar/nav-bar.component';

import { ToastrModule } from 'ngx-toastr';
import { MyToastService } from './services/toastr.service';

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
    SelectSearchComponent,
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    ToastrModule.forRoot()
  ],
  providers: [
    TaskService,
    DateTimeService,
    MyToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
