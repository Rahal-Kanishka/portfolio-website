import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellichefModalComponent } from './intellichef-modal.component';

describe('IntellichefModalComponent', () => {
  let component: IntellichefModalComponent;
  let fixture: ComponentFixture<IntellichefModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntellichefModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntellichefModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
