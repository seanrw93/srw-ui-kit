import { Component } from '@angular/core';
import { PricingCardComponent, PricingPlan } from '../../shared/components/pricing-card/pricing-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

const PLANS: PricingPlan[] = [
  {
    name: 'Lorem Starter',
    price: 'from $49',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    features: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt',
      'Ut labore et dolore magna aliqua',
      'Delivered in 7 days',
    ],
    cta: 'Get started',
    popular: false,
  },
  {
    name: 'Lorem Pro',
    price: 'from $99',
    note: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.',
    features: [
      'Quis nostrud exercitation ullamco',
      'Duis aute irure dolor in reprehenderit',
      'Ut enim ad minima veniam quis',
      'Excepteur sint occaecat cupidatat',
      'Sunt in culpa qui officia deserunt',
      'Delivered in 14 days',
    ],
    cta: 'Get started',
    popular: true,
  },
  {
    name: 'Lorem Scale',
    price: 'from $199',
    note: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    features: [
      'Nemo enim ipsam voluptatem quia',
      'Neque porro quisquam est qui dolorem',
      'Ut labore et dolore magnam aliquam',
      'Quis autem vel eum iure reprehenderit',
      'Delivered in 21 days',
    ],
    cta: 'Get started',
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
