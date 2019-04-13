import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from './shared/material.module';


import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
