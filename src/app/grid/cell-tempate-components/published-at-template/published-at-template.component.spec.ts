import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedAtTemplateComponent } from './published-at-template.component';

describe('PublishedAtTemplateComponent', () => {
  let component: PublishedAtTemplateComponent;
  let fixture: ComponentFixture<PublishedAtTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedAtTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedAtTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
