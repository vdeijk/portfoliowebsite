import { Component } from '@angular/core';
import { ReferralsService } from 'src/app/states/referrals.service';
import { Referral } from 'src/app/interfaces/referral';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss'],
})
export class ReferralsComponent {
  public referrals: Referral[] = [];
  public currentIndex: number = 0;

  constructor(private portfolioService: ReferralsService) {
    this.referrals = this.portfolioService.getReferrals();
  }

  nextReferral(): void {
    if (this.currentIndex < this.referrals.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  previousReferral(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.referrals.length - 1;
    }
  }
}
