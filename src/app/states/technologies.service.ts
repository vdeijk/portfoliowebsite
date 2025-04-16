import { Injectable } from '@angular/core';
import { CoreTechnology } from '../interfaces/coreTechnology';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  coreTechnologies: CoreTechnology[] = [
    { technologyName: 'React', technologySrc: 'assets/images/react.png' },
    {
      technologyName: 'Javascript',
      technologySrc: 'assets/images/javascript.png',
    },
    { technologyName: 'CSS', technologySrc: 'assets/images/css.png' },
    { technologyName: 'C#', technologySrc: 'assets/images/react.png' },
    { technologyName: 'Angular', technologySrc: 'assets/images/angular.svg' },
  ];

  otherTechnologies: string[] = [
    'RxJS',
    'NGRX',
    'MobX',
    'Azure Functions',
    '.NET',
    'Azure Functions',
    'Git',
    'Swagger',
    'GitHub',
    'Leaflet',
    'D3.js',
  ];

  getCoreTechnologies() {
    return this.coreTechnologies;
  }

  getOtherTechnologies() {
    return this.otherTechnologies;
  }
}
