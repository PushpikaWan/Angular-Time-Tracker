import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AutoCompleteSelectorComponent } from "src/app/shared/components/auto-complete-selector/auto-complete-selector.component";
import { TimerComponent } from "src/app/shared/components/timer/timer.component";
import { TimePickerComponent } from "src/app/shared/components/time-picker/time-picker.component";
import { DatePickerComponent } from "src/app/shared/components/date-picker/date-picker.component";
import { MatIconModule, MatDividerModule, MatInputModule, MatSelectModule } from "@angular/material";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { AppComponent } from "src/app/app.component";
import { SelectSearchComponent } from "src/app/shared/components/select-search/select-search.component";
import { SideBarComponent } from "src/app/components/side-bar/side-bar.component";
import { NavBarComponent } from "src/app/components/nav-bar/nav-bar.component";
import { ProjectPageComponent } from "src/app/components/project-page/project-page.component";
import { TagPageComponent } from "src/app/components/tag-page/tag-page.component";
import { NotFoundPageComponent } from "src/app/components/not-found-page/not-found-page.component";
import { ProjectAddDialog } from "src/app/shared/components/auto-complete-selector/add-dialog/add-dialog.component";
import { BrowserModule, By } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyOwnCustomMaterialModule } from "src/app/shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ColorPickerModule } from "ngx-color-picker";
import { ToastrModule } from "ngx-toastr";
import { TaskService } from "src/app/services/task.service";
import { DateTimeService } from "src/app/services/date-time.service";
import { MyToastService } from "src/app/services/toastr.service";
import { TaskItemComponent } from "../task-list/task-item/task-item.component";
import { TaskInputComponent } from "./task-input.component";
import { TaskListComponent } from "../task-list/task-list.component";
import { TaskPageComponent } from "../task-page.component";
import { browser } from "protractor";

describe('Component: taskInput', () => {

  let taskInputcomponent: TaskInputComponent;
  let taskItemcomponent: TaskItemComponent;
  let fixture: ComponentFixture<TaskInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });

    // create component and test fixture
    fixture = TestBed.createComponent(TaskInputComponent);

    // get test component from the fixture
    taskInputcomponent = fixture.componentInstance;
    taskInputcomponent.ngOnInit();
  });


  it('form valid when description Field is empty', () => {
    expect(taskInputcomponent.descriptionControl.valid).toBeTruthy();
  });

  it('form valid when description Field has value empty', () => {
    taskInputcomponent.descriptionControl.setValue("check descritpion");
    expect(taskInputcomponent.descriptionControl.valid).toBeTruthy();
  });

  it('form valid when Project Field is empty', () => {
    expect(taskInputcomponent.projectField.myControl.valid).toBeTruthy();
  });

  it('form valid when Project Field has value', () => {
    taskInputcomponent.projectField.myControl.setValue("check project");
    expect(taskInputcomponent.projectField.myControl.valid).toBeTruthy();
  });

  it('form valid when tag Field is empty', () => {
    expect(taskInputcomponent.tagField.myControl.valid).toBeTruthy();
  });

  it('form valid when tag Field has value', () => {
    taskInputcomponent.tagField.myControl.setValue("check tag");
    expect(taskInputcomponent.tagField.myControl.valid).toBeTruthy();
  });

  //intergration tests

  it('item (form) can save by clicking start and stop button and field rests after save', () => {
    
    taskInputcomponent.descriptionControl.setValue("check descritpion");
    taskInputcomponent.tagField.myControl.setValue("check tag");

    expect(taskInputcomponent.descriptionControl.value).toEqual("check descritpion");
    // const button = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
    // expect(button.value).toContain('Start');
    taskInputcomponent.onStartClick();
    taskInputcomponent.onStartClick();
    // expect(taskInputcomponent.descriptionControl.value).toEqual("");
  });

});