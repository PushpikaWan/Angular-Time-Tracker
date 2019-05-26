import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TaskItemComponent } from "./task-item.component";
import { AutoCompleteSelectorComponent } from "src/app/shared/components/auto-complete-selector/auto-complete-selector.component";
import { TimerComponent } from "src/app/shared/components/timer/timer.component";
import { TimePickerComponent } from "src/app/shared/components/time-picker/time-picker.component";
import { DatePickerComponent } from "src/app/shared/components/date-picker/date-picker.component";
import { MatIconModule, MatDividerModule, MatInputModule, MatSelectModule } from "@angular/material";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { AppComponent } from "src/app/app.component";
import { TaskInputComponent } from "../../task-input/task-input.component";
import { TaskListComponent } from "../task-list.component";
import { TaskPageComponent } from "../../task-page.component";
import { SelectSearchComponent } from "src/app/shared/components/select-search/select-search.component";
import { SideBarComponent } from "src/app/components/side-bar/side-bar.component";
import { NavBarComponent } from "src/app/components/nav-bar/nav-bar.component";
import { ProjectPageComponent } from "src/app/components/project-page/project-page.component";
import { TagPageComponent } from "src/app/components/tag-page/tag-page.component";
import { NotFoundPageComponent } from "src/app/components/not-found-page/not-found-page.component";
import { ProjectAddDialog } from "src/app/shared/components/auto-complete-selector/add-dialog/add-dialog.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyOwnCustomMaterialModule } from "src/app/shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ColorPickerModule } from "ngx-color-picker";
import { ToastrModule } from "ngx-toastr";
import { TaskService } from "src/app/services/task.service";
import { DateTimeService } from "src/app/services/date-time.service";
import { MyToastService } from "src/app/services/toastr.service";

describe('Component: taskItem', () => {

    let component: TaskItemComponent;
    let fixture: ComponentFixture<TaskItemComponent>;

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
        fixture = TestBed.createComponent(TaskItemComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
        component.ngOnInit();
    });

    it('form valid when Project Field is empty', () => {
        expect(component.projectField.myControl.valid).toBeTruthy();
    });

    it('form valid when tag Field is empty', () => {
        expect(component.tagField.myControl.valid).toBeTruthy();
    });

    it('form invalid when startTime Field is empty', () => {
        expect(component.startTimeField.timePickerControl.valid).toBeFalsy();
    });

    it('form invalid when endTime Field is empty', () => {
        expect(component.endTimeField.timePickerControl.valid).toBeFalsy();
    });

});