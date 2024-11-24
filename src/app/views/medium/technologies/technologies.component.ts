import { Component } from '@angular/core';
import { TechnologiesService } from 'src/app/states/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
  coreTechnologies: any = [];
  otherTechnologies: string[] = [];

  constructor(private technologiesService: TechnologiesService) {
    this.coreTechnologies = this.technologiesService.getCoreTechnologies();
    this.otherTechnologies = this.technologiesService.getOtherTechnologies();
  }
}
