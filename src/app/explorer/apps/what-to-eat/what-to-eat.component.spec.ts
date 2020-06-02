import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToEatComponent } from './what-to-eat.component';

describe('WhatToEatComponent', () => {
  let component: WhatToEatComponent;
  let fixture: ComponentFixture<WhatToEatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatToEatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatToEatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
