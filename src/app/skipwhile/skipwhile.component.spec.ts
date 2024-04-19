import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipwhileComponent } from './skipwhile.component';

describe('SkipwhileComponent', () => {
  let component: SkipwhileComponent;
  let fixture: ComponentFixture<SkipwhileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipwhileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipwhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
