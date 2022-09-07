import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  displayFullText = false;
  aboutButtonText = 'Read more';

  ngOnInit(): void {}

  expandText() {
    this.displayFullText = !this.displayFullText;
    if (!this.displayFullText) this.aboutButtonText = 'Read more';
    else this.aboutButtonText = 'Read less';
  }
}
