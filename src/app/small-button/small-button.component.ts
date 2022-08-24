import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.scss'],
})
export class SmallButtonComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}
