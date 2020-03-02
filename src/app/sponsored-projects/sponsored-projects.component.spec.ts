import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredProjectsComponent } from './sponsored-projects.component';

describe('SponsoredProjectsComponent', () => {
  let component: SponsoredProjectsComponent;
  let fixture: ComponentFixture<SponsoredProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsoredProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoredProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
