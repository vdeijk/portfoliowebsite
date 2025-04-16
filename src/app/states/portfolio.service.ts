import { Injectable } from '@angular/core';
import { CardLinks } from '../interfaces/cardLink';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  cardsTitles: string[] = [
    'GrowHub Frontend',
    'GrowHub Backend',
    'Mech Commander',
    'Portfolio',
  ];

  cardsFeatures: string[][] = [
    ['React', 'MoxB', 'UI/UX', 'Maintainble code'],
    ['C#', '.NET', 'Swagger', 'Maintainble code'],
    ['Unity', '80+ C# Scripts', 'UI/UX', 'Vector Math'],
    ['Angular', 'Adv. CSS', 'UI/UX', 'Maintable code'],
  ];

  cardsLinks: CardLinks[] = [
    { view: '', code: 'https://github.com/vdeijk/GrowHubFrontend' },
    { view: '', code: 'https://github.com/vdeijk/GrowHubBackend' },
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
