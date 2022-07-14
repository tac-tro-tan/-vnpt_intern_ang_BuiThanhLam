import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPriorityComponent } from './job-priority.component';

describe('JobPriorityComponent', () => {
  let component: JobPriorityComponent;
  let fixture: ComponentFixture<JobPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPriorityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
