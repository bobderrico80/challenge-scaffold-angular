import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorusComponent } from './chorus.component';

describe('ChorusComponent', () => {
  let component: ChorusComponent;
  let fixture: ComponentFixture<ChorusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChorusComponent]
    });
    fixture = TestBed.createComponent(ChorusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
