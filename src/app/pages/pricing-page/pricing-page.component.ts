import { Component } from '@angular/core';
import { PricingCardComponent, PricingPlan } from '../../shared/components/pricing-card/pricing-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

const PLANS: PricingPlan[] = [
  {
    name: 'Brochure Site',
    price: 'from £499',
    note: 'For freelancers and small businesses that need a professional online presence',
    features: [
      '1 to 5 pages (home, services, contact…)',
      'Modern design, mobile-responsive',
      'Contact form straight to your inbox',
      'Visible on Google from day one',
      'Delivered in 7 days',
    ],
    cta: 'Get started',
    popular: false,
  },
  {
    name: 'Professional Site',
    price: 'from £849',
    note: 'For small businesses that want to attract more clients online',
    features: [
      'Up to 10 custom pages',
      'Bespoke design matching your brand',
      'Fast load time — no lost visitors',
      'Full SEO setup included',
      'Self-editable after handover',
      'Delivered in 14 days',
    ],
    cta: 'Work with me',
    popular: true,
  },
  {
    name: 'Redesign & Optimisation',
    price: 'from £299',
    note: 'Your site exists but is slow, outdated, or invisible on Google',
    features: [
      'Full audit of your current site',
      'Site made 2× faster',
      'Improved Google visibility',
      'Clear report of fixes applied',
      'Delivered in 5 days',
    ],
    cta: 'Improve my site',
    popular: false,
  },
];

@Component({
  selector: 'srw-pricing-page',
  standalone: true,
  imports: [PricingCardComponent, RevealDirective],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss',
})
export class PricingPageComponent {
  readonly plans = PLANS;
}
