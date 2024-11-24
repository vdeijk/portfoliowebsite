import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitepaperInputComponent } from './text-input.component';

describe('WhitepaperInputComponent', () => {
  let component: WhitepaperInputComponent;
  let fixture: ComponentFixture<WhitepaperInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitepaperInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhitepaperInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
