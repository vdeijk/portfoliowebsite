import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header-line',
  templateUrl: './header-line.component.html',
  styleUrls: ['./header-line.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
