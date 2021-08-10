import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationlogComponent } from './informationlog.component';

describe('InformationlogComponent', () => {
  let component: InformationlogComponent;
  let fixture: ComponentFixture<InformationlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
