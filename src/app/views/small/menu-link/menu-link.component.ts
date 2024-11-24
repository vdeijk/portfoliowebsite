import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuLinkComponent {
  @Input() linkName: string = '';
  @Input() linkUrl: string = '';
}
