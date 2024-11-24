import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppColor } from 'src/app/enums/app-color';
import { CardLinks } from 'src/app/interfaces/cardLinks';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioCardComponent implements OnInit {
  @Input() cardFeatures: string[] = [];
  @Input() cardTitle = '';
  @Input() cardImageSrc = 0;
  @Input() cardLinks: CardLinks = { view: '', code: '' };

  public imageDynamicClasses = '';
  public iconColor = AppColor.Tertiary;

  constructor() {}

  ngOnInit(): void {
    this.imageDynamicClasses = this.assignDynamicClasses();
  }

  assignDynamicClasses() {
    if (this.cardImageSrc === 1) {
      return 'portfolio__image-1';
    }
    if (this.cardImageSrc === 2) {
      return 'portfolio__image-2';
    }
    if (this.cardImageSrc === 3) {
      return 'portfolio__image-3';
    }
    return 'portfolio__image-0';
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
