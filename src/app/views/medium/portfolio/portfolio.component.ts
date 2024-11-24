import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/states/portfolio.service';
import { CardLinks } from 'src/app/interfaces/cardLinks';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  cardsFeatures: string[][] = [];
  cardsTitles: string[] = [];
  cardsLinks: CardLinks[] = [];

  constructor(private portfolioService: PortfolioService) {
    this.cardsFeatures = this.portfolioService.getCardsFeatures();
    this.cardsTitles = this.portfolioService.getCardsTitles();
    this.cardsLinks = this.portfolioService.getCardsLinks();
  }
}
