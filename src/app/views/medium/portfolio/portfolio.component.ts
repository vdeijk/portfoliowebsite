import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/states/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  cardsFeatures: string[][] = [];
  cardsTitles: string[] = [];
  cardsImageSrcs: string[] = [];

  constructor(private portfolioService: PortfolioService) {
    this.cardsFeatures = this.portfolioService.getCardsFeatures();
    this.cardsTitles = this.portfolioService.getCardsTitles();
  }
}
