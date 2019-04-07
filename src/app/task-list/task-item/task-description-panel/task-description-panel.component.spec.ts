import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDescriptionPanelComponent } from './task-description-panel.component';

describe('TaskDescriptionPanelComponent', () => {
  let component: TaskDescriptionPanelComponent;
  let fixture: ComponentFixture<TaskDescriptionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDescriptionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDescriptionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
