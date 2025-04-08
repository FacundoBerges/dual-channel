import { Component } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapWhatsapp } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'dual-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss',
  imports: [NgIcon],
  viewProviders: [provideIcons({ bootstrapWhatsapp })],
})
export class WhatsappComponent {}
