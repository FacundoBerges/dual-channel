import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _document: Document = inject(DOCUMENT);
  private _isDarkMode: boolean = false;
  public iconName: 'bootstrapSun' | 'bootstrapMoon' = 'bootstrapSun';

  constructor() {
    const darkModeMediaQuery: MediaQueryList = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    const localStorageTheme: string | null = localStorage.getItem('theme');

    this._isDarkMode =
      darkModeMediaQuery.matches || localStorageTheme === 'dark';
    this.changeTheme();
  }

  public changeTheme(): void {
    this._isDarkMode = !this._isDarkMode;
    this._document.body.setAttribute('data-theme', this.theme);
    this._updateStorage();
  }

  private _updateStorage() {
    localStorage.setItem('theme', this.theme);
  }

  public get theme(): 'dark' | 'light' {
    return this._isDarkMode ? 'dark' : 'light';
  }
}
