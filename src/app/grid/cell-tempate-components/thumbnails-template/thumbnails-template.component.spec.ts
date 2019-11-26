import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsTemplateComponent } from './thumbnails-template.component';

describe('ThumbnailsTemplateComponent', () => {
  let component: ThumbnailsTemplateComponent;
  let fixture: ComponentFixture<ThumbnailsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
