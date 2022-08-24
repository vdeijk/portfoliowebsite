import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-button-mars',
  templateUrl: './small-button-mars.component.html',
  styleUrls: ['./small-button-mars.component.scss'],
})
export class SmallButtonMarsComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}
