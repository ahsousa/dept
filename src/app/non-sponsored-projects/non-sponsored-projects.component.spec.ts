import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonSponsoredProjectsComponent } from './non-sponsored-projects.component';

describe('NonSponsoredProjectsComponent', () => {
  let component: NonSponsoredProjectsComponent;
  let fixture: ComponentFixture<NonSponsoredProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonSponsoredProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonSponsoredProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
