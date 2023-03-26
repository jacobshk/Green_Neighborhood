import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDataTestComponent } from './map-data-test.component';

describe('MapDataTestComponent', () => {
  let component: MapDataTestComponent;
  let fixture: ComponentFixture<MapDataTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDataTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapDataTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
