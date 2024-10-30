import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { CommonTestModule } from '../../modules/common-test.module';
import { MockComponent } from 'ng-mocks';
import { ChorusCardComponent } from '../chorus-card/chorus-card.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent, MockComponent(ChorusCardComponent)],
      imports: [CommonTestModule],
    });
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
