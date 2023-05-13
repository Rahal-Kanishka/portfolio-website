import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroRiskModalComponent } from './zero-risk-modal.component';

describe('ZeroRiskModalComponent', () => {
  let component: ZeroRiskModalComponent;
  let fixture: ComponentFixture<ZeroRiskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroRiskModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroRiskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
