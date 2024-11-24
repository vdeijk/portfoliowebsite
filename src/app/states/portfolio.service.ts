import { Injectable } from '@angular/core';
import { CardLinks } from '../interfaces/cardLinks';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  cardsTitles: string[] = ['Mech Command', 'Mars Commander', 'Portfolio'];

  cardsFeatures: string[][] = [
    ['Unity', '80+ C# Scripts', 'UI/UX', 'Rigidbody Math'],
    ['Unity', '160+ C# Scripts', 'UI/UX', 'Rigidbody Math'],
    ['Angular', 'Advanced CSS', 'UI/UX', 'Maintable code'],
  ];

  cardsLinks: CardLinks[] = [
    { view: 'https://vdeijk.itch.io/mech-commander', code: '' },
    { view: 'https://vdeijk.itch.io/mars-commander', code: '' },
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
