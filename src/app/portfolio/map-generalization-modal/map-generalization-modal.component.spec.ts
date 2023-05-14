import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGeneralizationModalComponent } from './map-generalization-modal.component';

describe('MapGeneralizationModalComponent', () => {
  let component: MapGeneralizationModalComponent;
  let fixture: ComponentFixture<MapGeneralizationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGeneralizationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGeneralizationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
