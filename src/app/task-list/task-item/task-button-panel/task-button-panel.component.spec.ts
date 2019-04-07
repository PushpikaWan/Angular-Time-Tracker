import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskButtonPanelComponent } from './task-button-panel.component';

describe('TaskButtonPanelComponent', () => {
  let component: TaskButtonPanelComponent;
  let fixture: ComponentFixture<TaskButtonPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskButtonPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskButtonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
