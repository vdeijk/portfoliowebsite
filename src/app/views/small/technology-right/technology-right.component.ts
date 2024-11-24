import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-technology-right',
  templateUrl: './technology-right.component.html',
  styleUrls: ['./technology-right.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TechnologyRightComponent {
  @Input() technologyName: string = '';
  @Input() technologySrc: string = '';
}
