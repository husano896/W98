import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinTabGroupComponent } from './win-tab-group.component';

describe('WinTabGroupComponent', () => {
  let component: WinTabGroupComponent;
  let fixture: ComponentFixture<WinTabGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinTabGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
