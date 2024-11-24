import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WhitepaperInputComponent implements OnInit {
  @Input() public placeholder: string = '';
  @Input() public abstractControl!: AbstractControl;
  public formControl!: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.formControl = this.abstractControl as FormControl;
  }
}
