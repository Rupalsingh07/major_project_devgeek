import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFteProjectsComponent } from './all-fte-projects.component';

describe('AllFteProjectsComponent', () => {
  let component: AllFteProjectsComponent;
  let fixture: ComponentFixture<AllFteProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFteProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFteProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
