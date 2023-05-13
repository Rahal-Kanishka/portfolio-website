import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusPlatformModalComponent } from './bus-platform-modal.component';

describe('BusPlatformModalComponent', () => {
  let component: BusPlatformModalComponent;
  let fixture: ComponentFixture<BusPlatformModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusPlatformModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusPlatformModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
