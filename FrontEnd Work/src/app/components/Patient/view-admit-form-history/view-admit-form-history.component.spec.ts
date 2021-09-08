import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdmitFormHistoryComponent } from './view-admit-form-history.component';

describe('ViewAdmitFormHistoryComponent', () => {
  let component: ViewAdmitFormHistoryComponent;
  let fixture: ComponentFixture<ViewAdmitFormHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdmitFormHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdmitFormHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
