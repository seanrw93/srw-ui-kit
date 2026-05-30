import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PricingPlan {
  name: string;
  price: string;
  note: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

@Component({
  selector: 'srw-pricing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss',
})
export class PricingCardComponent {
  @Input({ required: true }) plan!: PricingPlan;
}