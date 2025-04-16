import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralButtonComponent } from './referral-button.component';

describe('ReferralButtonComponent', () => {
  let component: ReferralButtonComponent;
  let fixture: ComponentFixture<ReferralButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
