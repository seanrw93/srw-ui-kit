import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

const SERVICE_LINKS = [
  { label: 'Web Design' },
  { label: 'E-commerce' },
  { label: 'Performance & Speed' },
  { label: 'Technical SEO' },
  { label: 'Maintenance & Support' },
];

const NAV_LINKS = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
];

@Component({
  selector: 'srw-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly serviceLinks = SERVICE_LINKS;
  readonly navLinks = NAV_LINKS;

  readonly mobileOpen = signal(false);
  readonly servicesOpen = signal(false);
  readonly mobileServicesOpen = signal(false);

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  onServicesEnter(): void {
    if (this.closeTimer) clearTimeout(this.closeTimer);
    this.servicesOpen.set(true);
  }

  onServicesLeave(): void {
    this.closeTimer = setTimeout(() => this.servicesOpen.set(false), 150);
  }

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
    if (!this.mobileOpen()) this.mobileServicesOpen.set(false);
  }

  toggleMobileServices(): void {
    this.mobileServicesOpen.update(v => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
    this.mobileServicesOpen.set(false);
  }
}