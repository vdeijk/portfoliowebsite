import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Referral } from 'src/app/interfaces/referral';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReferralComponent implements OnInit {
  @Input() public referral: Referral = {
    person: '',
    position: '',
    message: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
