import { Component, OnInit } from '@angular/core';
import { AppColor } from 'src/app/enums/app-color';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  iconColor = AppColor.Primary;

  constructor() { }

  ngOnInit(): void {
  }

}
