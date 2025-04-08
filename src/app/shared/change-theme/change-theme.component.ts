import { Component, inject, OnInit } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapSun, bootstrapMoon } from '@ng-icons/bootstrap-icons';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'dual-change-theme',
  imports: [NgIcon],
  templateUrl: './change-theme.component.html',
  styleUrl: './change-theme.component.scss',
  viewProviders: [provideIcons({ bootstrapSun, bootstrapMoon })],
})
export class ChangeThemeComponent implements OnInit {
  private _themeService: ThemeService = inject(ThemeService);
  public iconName: 'bootstrapSun' | 'bootstrapMoon' = 'bootstrapSun';

  ngOnInit(): void {
    this._changeIcon();
  }

  private _changeIcon() {
    this.iconName =
      this._themeService.theme === 'dark' ? 'bootstrapMoon' : 'bootstrapSun';
  }

  public toggleTheme() {
    this._themeService.changeTheme();
  }
}
