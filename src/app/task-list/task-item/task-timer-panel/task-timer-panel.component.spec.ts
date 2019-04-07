import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTimerPanelComponent } from './task-timer-panel.component';

describe('TaskTimerPanelComponent', () => {
  let component: TaskTimerPanelComponent;
  let fixture: ComponentFixture<TaskTimerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTimerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTimerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
