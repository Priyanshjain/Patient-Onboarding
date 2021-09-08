import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitFormComponent } from './admit-form.component';

describe('AdmitFormComponent', () => {
  let component: AdmitFormComponent;
  let fixture: ComponentFixture<AdmitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
