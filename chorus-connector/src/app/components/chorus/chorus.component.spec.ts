import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChorusComponent } from './chorus.component';
import { CommonTestModule } from '../../modules/common-test.module';
import { MockComponent } from 'ng-mocks';
import { ChorusCardComponent } from '../chorus-card/chorus-card.component';

describe('ChorusComponent', () => {
  let component: ChorusComponent;
  let fixture: ComponentFixture<ChorusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChorusComponent, MockComponent(ChorusCardComponent)],
      imports: [CommonTestModule],
    });
    fixture = TestBed.createComponent(ChorusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
