import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  coreTechnologies = [
    { technologyName: 'React', technologySrc: 'assets/images/react.png' },
    {
      technologyName: 'Javascript',
      technologySrc: 'assets/images/javascript.png',
    },
    { technologyName: 'CSS', technologySrc: 'assets/images/css.png' },
    { technologyName: 'C#', technologySrc: 'assets/images/react.png' },
    { technologyName: 'Angular', technologySrc: 'assets/images/angular.svg' },
  ];

  otherTechnologies = [
    'Python',
    'NodeJS',
    'SQL',
    'MongoDB',
    'Java',
    'Unity',
    'Wordpress',
    'IBM Cloud',
  ];

  getCoreTechnologies() {
    return this.coreTechnologies;
  }

  getOtherTechnologies() {
    return this.otherTechnologies;
  }
}
