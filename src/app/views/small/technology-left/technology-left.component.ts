import { Component, Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-technology-left',
  templateUrl: './technology-left.component.html',
  styleUrls: ['./technology-left.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TechnologyLeftComponent {
  @Input() technologyName: string = '';
  @Input() technologySrc: string = '';
}
