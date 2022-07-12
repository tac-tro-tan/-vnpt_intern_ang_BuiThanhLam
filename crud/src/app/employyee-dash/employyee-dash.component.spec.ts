import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployyeeDashComponent } from './employyee-dash.component';

describe('EmployyeeDashComponent', () => {
  let component: EmployyeeDashComponent;
  let fixture: ComponentFixture<EmployyeeDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployyeeDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployyeeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
