import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentHistoryComponent } from './view-appointment-history.component';

describe('ViewAppointmentHistoryComponent', () => {
  let component: ViewAppointmentHistoryComponent;
  let fixture: ComponentFixture<ViewAppointmentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
