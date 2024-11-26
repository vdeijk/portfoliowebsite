import { Injectable } from '@angular/core';
import { CardLinks } from '../interfaces/cardLink';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  cardsTitles: string[] = [
    'Mech Command',
    'Mars Commander',
    'Portfolio',
    'Comfy Sloth',
  ];

  cardsFeatures: string[][] = [
    ['Unity', '80+ C# Scripts', 'UI/UX', 'Rigidbody Math'],
    ['Unity', '160+ C# Scripts', 'UI/UX', 'Rigidbody Math'],
    ['Angular', 'Adv. CSS', 'UI/UX', 'Maintable code'],
    ['React', 'State Management', 'UI/UX', 'Maintable code'],
  ];

  cardsLinks: CardLinks[] = [
    { view: 'https://vdeijk.itch.io/mech-commander', code: '' },
    { view: 'https://vdeijk.itch.io/mars-commander', code: '' },
    {
      view: '',
      code: 'https://github.com/vdeijk/portfoliowebsite',
    },
    {
      view: 'https://react-course-comfy-sloth-store.netlify.app/',
      code: 'https://github.com/john-smilga/react-course-comfy-sloth-store',
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
