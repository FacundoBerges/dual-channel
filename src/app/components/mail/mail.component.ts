import { Component, input, InputSignal, OnInit } from '@angular/core';

import { bootstrapEnvelopeAt } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'dual-mail',
  imports: [NgIcon],
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.scss',
  viewProviders: [provideIcons({ bootstrapEnvelopeAt })],
})
export class MailComponent implements OnInit {
  public iconName: InputSignal<string | undefined> = input<string>();
  public iconSize: InputSignal<string> = input<string>('2.5rem');
  public iconColor: InputSignal<string> = input<string>('var(--text-primary)');

  ngOnInit(): void {
    if (!this.iconName) {
      throw new Error('iconName is required');
    }
  }
}
