import { DOCUMENT } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { MailComponent } from '../../components/mail/mail.component';
import { ThemeService } from '../../services/theme.service';

type Image = {
  src: string;
  alt: string;
  title?: string;
};

@Component({
  selector: 'dual-home',
  imports: [MailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private _themeService = inject(ThemeService);
  public iconName: string = 'bootstrapEnvelopeAt';
  public image: Image = {
    src: '/assets/img/dual-channel_logo_color.png',
    alt: 'Dual Channel Logo',
    title: 'Dual channel logo',
  };

  ngOnInit(): void {
    this._changeImage();
  }

  private _changeImage() {
    this.image.src =
      this._themeService.theme === 'dark'
        ? '/assets/img/dual-channel_logo_color.png'
        : '/assets/img/dual-channel_logo_black.png';
  }
}
