import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'srw-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  services = ['Web Design', 'E-commerce', 'Performance & Speed', 'Technical SEO', 'Maintenance & Support'];
  navLinks = [
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ];

  mobileOpen = signal(false);
  servicesOpen = signal(false);
  mobileServicesOpen = signal(false);

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  onServicesEnter() {
    if (this.closeTimer) clearTimeout(this.closeTimer);
    this.servicesOpen.set(true);
  }

  onServicesLeave() {
    this.closeTimer = setTimeout(() => this.servicesOpen.set(false), 150);
  }

  toggleMobile() {
    this.mobileOpen.update(v => !v);
    if (!this.mobileOpen()) this.mobileServicesOpen.set(false);
  }

  toggleMobileServices() {
    this.mobileServicesOpen.update(v => !v);
  }

  closeMobile() {
    this.mobileOpen.set(false);
    this.mobileServicesOpen.set(false);
  }
}
