import { Component } from '@angular/core';
import { CoreTechnology } from 'src/app/interfaces/coreTechnology';
import { TechnologiesService } from 'src/app/states/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
  coreTechnologies: CoreTechnology[] = [];
  otherTechnologies: string[] = [];

  constructor(private technologiesService: TechnologiesService) {
    this.coreTechnologies = this.technologiesService.getCoreTechnologies();
    this.otherTechnologies = this.technologiesService.getOtherTechnologies();
  }
}
