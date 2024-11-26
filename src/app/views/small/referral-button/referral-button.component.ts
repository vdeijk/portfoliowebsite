import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { AppColor } from 'src/app/enums/app-color';

@Component({
  selector: 'app-referral-button',
  templateUrl: './referral-button.component.html',
  styleUrls: ['./referral-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReferralButtonComponent {
  @Input() public fontAwesomeType = '';
  @Output() buttonClick = new EventEmitter<void>();
  
  public iconColor = AppColor.Tertiary;
  

  onClick(): void {
    this.buttonClick.emit();
  }
}
