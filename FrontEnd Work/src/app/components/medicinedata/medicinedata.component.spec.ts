import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinedataComponent } from './medicinedata.component';

describe('MedicinedataComponent', () => {
  let component: MedicinedataComponent;
  let fixture: ComponentFixture<MedicinedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
