import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorusCardComponent } from './chorus-card.component';
import { CommonTestModule } from '../../modules/common-test.module';

describe('ChorusCardComponent', () => {
  let component: ChorusCardComponent;
  let fixture: ComponentFixture<ChorusCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChorusCardComponent],
      imports: [CommonTestModule],
    });
    fixture = TestBed.createComponent(ChorusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
