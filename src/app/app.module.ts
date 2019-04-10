import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './task-list/task-list.component';
import { MyOwnCustomMaterialModule } from './shared/material.module';
import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { TaskDescriptionPanelComponent } from './task-list/task-item/task-description-panel/task-description-panel.component';
import { TaskTimerPanelComponent } from './task-list/task-item/task-timer-panel/task-timer-panel.component';
import { TaskButtonPanelComponent } from './task-list/task-item/task-button-panel/task-button-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskDescriptionPanelComponent,
    TaskTimerPanelComponent,
    TaskButtonPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
