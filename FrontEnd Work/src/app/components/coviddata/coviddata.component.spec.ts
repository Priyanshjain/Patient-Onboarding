import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoviddataComponent } from './coviddata.component';

describe('CoviddataComponent', () => {
  let component: CoviddataComponent;
  let fixture: ComponentFixture<CoviddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoviddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoviddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
