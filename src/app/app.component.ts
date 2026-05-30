import { Component, inject, computed, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';
import { ModalComponent } from './shared/components/modal/modal.component';

interface NavItem { label: string; path: string; }
interface NavCategory { label: string; items: NavItem[]; }

const NAV: NavCategory[] = [
  {
    label: 'Overview',
    items: [{ label: 'Home', path: '/home' }],
  },
  {
    label: 'Primitives',
    items: [
      { label: 'Button', path: '/button' },
      { label: 'Badge', path: '/badge' },
      { label: 'Input', path: '/input' },
      { label: 'Alert', path: '/alert' },
    ],
  },
  {
    label: 'Containers',
    items: [
      { label: 'Card', path: '/card' },
      { label: 'Modal', path: '/modal' },
      { label: 'Pricing Card', path: '/pricing' },
    ],
  },
  {
    label: 'Patterns',
    items: [
      { label: 'FAQ Accordion', path: '/faq' },
      { label: 'Contact Form', path: '/contact' },
    ],
  },
  {
    label: 'Layout',
    items: [
      { label: 'Navbar', path: '/navbar' },
      { label: 'Hero', path: '/hero' },
      { label: 'Footer', path: '/footer' },
    ],
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly themeService = inject(ThemeService);
  readonly isDark = computed(() => this.themeService.isDark());
  readonly nav = NAV;

  // All categories open by default except 'Overview' which has no toggle arrow needed
  readonly openCategories = signal<Set<string>>(new Set(NAV.map(c => c.label)));

  toggleCategory(label: string): void {
    this.openCategories.update(set => {
      const next = new Set(set);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  }

  isCategoryOpen(label: string): boolean {
    return this.openCategories().has(label);
  }
}
