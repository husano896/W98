import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpcssComponent } from './xpcss.component';

describe('XpcssComponent', () => {
  let component: XpcssComponent;
  let fixture: ComponentFixture<XpcssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpcssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
