import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  cardsFeatures: string[][] = [
    ['Angular', 'NodeJS', 'Mailchimp', 'SCSS slider'],
    ['Angular', 'NodeJS', 'Mailchimp', 'SCSS slider'],
    ['Angular', 'NodeJS', 'Mailchimp', 'SCSS slider'],
    ['Angular', 'NodeJS', 'Mailchimp', 'SCSS slider'],
  ];

  cardsTitles: string[] = [
    'Creative Project App',
    'Vocaublary App',
    'Money Managment App',
    'Unity Game',
  ];

  cardsImageSrcs: string[] = [];

  getCardsFeatures() {
    return this.cardsFeatures;
  }

  getCardsTitles() {
    return this.cardsTitles;
  }

  getCardsImageSrcs() {
    return this.cardsImageSrcs;
  }
}
