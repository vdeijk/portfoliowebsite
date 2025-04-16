import { Injectable } from '@angular/core';
import { CardLinks } from '../interfaces/cardLink';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  cardsTitles: string[] = [
    'Mech Commander',
    'Portfolio',
  ];

  cardsFeatures: string[][] = [
    ['Unity', '80+ C# Scripts', 'UI/UX', 'Vector Math'],
    ['Angular', 'Adv. CSS', 'UI/UX', 'Maintable code'],
  ];

  cardsLinks: CardLinks[] = [
    { view: 'https://vdeijk.itch.io/mech-commander', code: '' },
    {
      view: '',
      code: 'https://github.com/vdeijk/portfoliowebsite',
    },
  ];

  getCardsFeatures() {
    return this.cardsFeatures;
  }

  getCardsTitles() {
    return this.cardsTitles;
  }

  getCardsLinks() {
    return this.cardsLinks;
  }
}
