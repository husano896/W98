import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinWindowComponent } from './win-window.component';

describe('WinWindowComponent', () => {
  let component: WinWindowComponent;
  let fixture: ComponentFixture<WinWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
