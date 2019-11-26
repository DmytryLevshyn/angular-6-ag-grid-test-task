import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesriptionTemplateComponent } from './desription-template.component';

describe('DesriptionTemplateComponent', () => {
  let component: DesriptionTemplateComponent;
  let fixture: ComponentFixture<DesriptionTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesriptionTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesriptionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
