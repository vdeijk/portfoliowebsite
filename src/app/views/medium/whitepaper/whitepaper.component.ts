import { Component, OnInit } from '@angular/core';
import { MarginTop } from 'src/app/enums/margin-top';
import { FormGroup } from '@angular/forms';
import { WhitepaperService } from 'src/app/states/whitepaper.service';

@Component({
  selector: 'app-whitepaper',
  templateUrl: './whitepaper.component.html',
  styleUrls: ['./whitepaper.component.scss']
})
export class WhitepaperComponent implements OnInit {
  public extraButtonMargin = MarginTop.S;
  public form!: FormGroup;

  constructor(private whitepaperService: WhitepaperService) { }

  ngOnInit(): void {
    this.form = this.whitepaperService.getForm();
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
      this.downloadFile();
    }
  }
  
  downloadFile(): void {
    const link = document.createElement('a');
    link.href = './assets/files/FrameworkAgnosticWebDevelopment.pdf';
    link.download = 'FrameworkAgnosticWebDevelopment.pdf';
    link.click();
  }
}