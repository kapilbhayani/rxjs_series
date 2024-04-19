import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcetMapComponent } from './concet-map.component';

describe('ConcetMapComponent', () => {
  let component: ConcetMapComponent;
  let fixture: ComponentFixture<ConcetMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcetMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcetMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
