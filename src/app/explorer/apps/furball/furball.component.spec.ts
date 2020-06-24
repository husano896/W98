import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurballComponent } from './furball.component';

describe('FurballComponent', () => {
  let component: FurballComponent;
  let fixture: ComponentFixture<FurballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
