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

  public dynamicClasses = '';

  constructor() {}

  ngOnInit(): void {
    this.dynamicClasses = this.assignDynamicClasses();
  }

  assignDynamicClasses() {
    if (this.iconColor === AppColor.Secondary) {
      return this.fontAwesomeType + ' color-secondary';
    }
    if (this.iconColor === AppColor.Tertiary) {
      return this.fontAwesomeType + ' color-tertiary';
    }
    return this.fontAwesomeType + ' color-primary';
  }
}
