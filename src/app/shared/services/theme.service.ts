import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<Theme>('light');

  constructor() {
    effect(() => document.body.setAttribute('data-theme', this.theme()));
  }

  toggle() {
    this.theme.update(t => t === 'light' ? 'dark' : 'light');
  }

  isDark() {
    return this.theme() === 'dark';
  }
}
