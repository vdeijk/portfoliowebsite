import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { MarginTop } from 'src/app/enums/margin-top';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SmallButtonComponent implements OnInit {
  @Input() title = '';
  @Input() extraMarginTop = MarginTop.None;
  @Input() dynamicClasses = '';
  @Output() buttonClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    this.dynamicClasses = this.assignDynamicClasses();
  }

  assignDynamicClasses() {
    if (this.extraMarginTop === MarginTop.S) {
      return 'small-button__extra-margin-top-S';
    }
    if (this.extraMarginTop === MarginTop.M) {
      return 'small-button__extra-margin-top-M';
    }
    if (this.extraMarginTop === MarginTop.L) {
      return 'small-button__extra-margin-top-L';
    }
    return '';
  }
  
  onClick() {
    this.buttonClick.emit();
  }
}
