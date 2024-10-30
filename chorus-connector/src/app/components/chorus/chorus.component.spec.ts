import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorusComponent } from './chorus.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('ChorusComponent', () => {
  let component: ChorusComponent;
  let fixture: ComponentFixture<ChorusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChorusComponent],
      imports: [MaterialModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(ChorusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
