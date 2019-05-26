import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from './shared/material.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ColorPickerModule } from 'ngx-color-picker';


import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { DatePickerComponent } from './shared/components/date-picker/date-picker.component';
import { TimePickerComponent } from './shared/components/time-picker/time-picker.component';
import { TimerComponent } from './shared/components/timer/timer.component';
import { AutoCompleteSelectorComponent } from './shared/components/auto-complete-selector/auto-complete-selector.component';
import { DateTimeService } from './services/date-time.service';
import { SelectSearchComponent } from './shared/components/select-search/select-search.component';

import { ToastrModule } from 'ngx-toastr';
import { MyToastService } from './services/toastr.service';
import { TaskInputComponent } from './components/task-page/task-input/task-input.component';
import { TaskListComponent } from './components/task-page/task-list/task-list.component';
import { TaskItemComponent } from './components/task-page/task-list/task-item/task-item.component';
import { TaskPageComponent } from './components/task-page/task-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { TagPageComponent } from './components/tag-page/tag-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProjectAddDialog } from './shared/components/auto-complete-selector/add-dialog/add-dialog.component';


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
    NavBarComponent,
    ProjectPageComponent,
    TagPageComponent,
    NotFoundPageComponent,
    ProjectAddDialog
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
    ColorPickerModule,
    ToastrModule.forRoot()
  ],
  providers: [
    TaskService,
    DateTimeService,
    MyToastService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ProjectAddDialog]
})
export class AppModule { }
