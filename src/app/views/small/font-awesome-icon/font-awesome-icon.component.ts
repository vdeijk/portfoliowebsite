import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppColor } from 'src/app/enums/app-color';

@Component({
  selector: 'app-font-awesome-icon',
  templateUrl: './font-awesome-icon.component.html',
  styleUrls: ['./font-awesome-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent implements OnInit {
  @Input() public fontAwesomeType: string = '';
  @Input() public iconColor: AppColor = AppColor.Primary;
  @Input() public shouldScaleWhenHovered: boolean = false;

  public dynamicClasses = '';

  constructor() {}

  ngOnInit(): void {
    this.dynamicClasses =
      this.fontAwesomeType +
      this.assignDynamicColor() +
      this.assignDynamicHover();
  }

  assignDynamicColor() {
    if (this.iconColor === AppColor.Secondary) {
      return ' color-secondary';
    }
    if (this.iconColor === AppColor.Tertiary) {
      return ' color-tertiary';
    }
    return ' color-primary';
  }

  assignDynamicHover() {
    if (this.shouldScaleWhenHovered) {
      return ' icon__hover-scale';
    }
    return '';
  }
}
