import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AppColor } from 'src/app/enums/app-color';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScrollButtonComponent {
  @Input() public href = '';

  public iconColor = AppColor.Tertiary;

  constructor() {}
}
