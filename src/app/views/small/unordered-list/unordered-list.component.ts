import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UnorderedListComponent {
  @Input() texts: string[] = [];

  constructor() {}
}
