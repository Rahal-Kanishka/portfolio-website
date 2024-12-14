import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WastedumpComponent } from './wastedump.component';

describe('WastedumpComponent', () => {
  let component: WastedumpComponent;
  let fixture: ComponentFixture<WastedumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WastedumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WastedumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
