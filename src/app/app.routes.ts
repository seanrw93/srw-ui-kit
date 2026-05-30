import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  // Primitives
  {
    path: 'button',
    loadComponent: () => import('./pages/button-page/button-page.component').then(m => m.ButtonPageComponent),
  },
  {
    path: 'badge',
    loadComponent: () => import('./pages/badge-page/badge-page.component').then(m => m.BadgePageComponent),
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input-page/input-page.component').then(m => m.InputPageComponent),
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert-page/alert-page.component').then(m => m.AlertPageComponent),
  },
  // Containers
  {
    path: 'card',
    loadComponent: () => import('./pages/card-page/card-page.component').then(m => m.CardPageComponent),
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal-page/modal-page.component').then(m => m.ModalPageComponent),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing-page/pricing-page.component').then(m => m.PricingPageComponent),
  },
  // Patterns
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq-page/faq-page.component').then(m => m.FaqPageComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page.component').then(m => m.ContactPageComponent),
  },
  // Layout
  {
    path: 'navbar',
    loadComponent: () => import('./pages/navbar-page/navbar-page.component').then(m => m.NavbarPageComponent),
  },
  {
    path: 'hero',
    loadComponent: () => import('./pages/hero-page/hero-page.component').then(m => m.HeroPageComponent),
  },
  {
    path: 'footer',
    loadComponent: () => import('./pages/footer-page/footer-page.component').then(m => m.FooterPageComponent),
  },
];
