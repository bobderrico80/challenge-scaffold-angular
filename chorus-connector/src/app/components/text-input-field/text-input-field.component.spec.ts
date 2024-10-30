import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputFieldComponent } from './text-input-field.component';
import { CommonTestModule } from '../../modules/common-test.module';

describe('TextInputFieldComponent', () => {
  let component: TextInputFieldComponent;
  let fixture: ComponentFixture<TextInputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextInputFieldComponent],
      imports: [CommonTestModule],
    });
    fixture = TestBed.createComponent(TextInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
