import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChorusModalComponent } from './edit-chorus-modal.component';
import { CommonTestModule } from '../../modules/common-test.module';

describe('EditChorusModalComponent', () => {
  let component: EditChorusModalComponent;
  let fixture: ComponentFixture<EditChorusModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditChorusModalComponent],
      imports: [CommonTestModule],
    });
    fixture = TestBed.createComponent(EditChorusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
