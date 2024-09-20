import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleEmployeeComponent } from './sample-employee.component';

describe('SampleEmployeeComponent', () => {
  let component: SampleEmployeeComponent;
  let fixture: ComponentFixture<SampleEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
