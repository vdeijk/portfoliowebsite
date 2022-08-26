import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss'],
})
export class ReferralsComponent implements OnInit {
  constructor() {}

  sliderNumbers: number[] = [0, 1];
  slideClass0 = '';
  slideClass1 = '';
  //slideClass2 = '';

  slideClasses = [
    'slide referrals__pos-0',
    'slide referrals__pos-1',
    //'slide referrals__pos-2',
  ];

  ngOnInit() {
    this.assignSlideClasses();
  }

  moveSliderLeft() {
    let curSlideNumber = this.sliderNumbers[0];
    let newNumbers: number[];
    newNumbers = this.sliderNumbers.map((el) => {
      curSlideNumber = el;
      if (curSlideNumber > 0) el -= 1;
      else el = this.sliderNumbers.length - 1;
      return el;
    });
    this.sliderNumbers = newNumbers;
    this.assignSlideClasses();
  }

  moveSliderRight() {
    let curSlideNumber = this.sliderNumbers[0];
    let newNumbers: number[];
    newNumbers = this.sliderNumbers.map((el) => {
      if (curSlideNumber < this.sliderNumbers.length - 1) el += 1;
      else el = 0;
      curSlideNumber = el;
      return el;
    });
    this.sliderNumbers = newNumbers;
    this.assignSlideClasses();
  }

  assignSlideClasses() {
    this.slideClass0 = this.slideClasses[this.sliderNumbers[0]];
    this.slideClass1 = this.slideClasses[this.sliderNumbers[1]];
    // this.slideClass2 = this.slideClasses[this.sliderNumbers[2]];
  }
}
