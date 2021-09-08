import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdmitComponent } from './view-admit.component';

describe('ViewAdmitComponent', () => {
  let component: ViewAdmitComponent;
  let fixture: ComponentFixture<ViewAdmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
