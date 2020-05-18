import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BIOSComponent } from './bios.component';

describe('BIOSComponent', () => {
  let component: BIOSComponent;
  let fixture: ComponentFixture<BIOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BIOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BIOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
