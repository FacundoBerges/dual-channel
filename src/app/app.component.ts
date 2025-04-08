import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ChangeThemeComponent } from './shared/change-theme/change-theme.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WhatsappComponent } from './shared/whatsapp/whatsapp.component';

@Component({
  selector: 'dual-root',
  imports: [
    RouterOutlet,
    ChangeThemeComponent,
    FooterComponent,
    WhatsappComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
