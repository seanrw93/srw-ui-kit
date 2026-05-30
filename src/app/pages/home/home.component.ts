import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Section {
  category: string;
  items: { label: string; path: string; desc: string }[];
}

const SECTIONS: Section[] = [
  {
    category: 'Primitives',
    items: [
      { label: 'Button', path: '/button', desc: '4 variants, 3 sizes, loading & disabled states' },
      { label: 'Badge', path: '/badge', desc: '6 semantic variants with optional status dot' },
      { label: 'Input', path: '/input', desc: 'Label, helper, error, and disabled states' },
      { label: 'Alert', path: '/alert', desc: 'Info, success, warning, and error variants' },
    ],
  },
  {
    category: 'Containers',
    items: [
      { label: 'Card', path: '/card', desc: 'With and without image slot via ng-content' },
      { label: 'Modal', path: '/modal', desc: 'Signal-driven overlay with danger variant' },
      { label: 'Pricing Card', path: '/pricing', desc: 'Feature list, popular badge, bounce on hover' },
    ],
  },
  {
    category: 'Patterns',
    items: [
      { label: 'FAQ Accordion', path: '/faq', desc: 'Animated expand/collapse with IntersectionObserver' },
      { label: 'Contact Form', path: '/contact', desc: 'Two-column layout with status feedback' },
    ],
  },
  {
    category: 'Layout',
    items: [
      { label: 'Navbar', path: '/navbar', desc: 'Sticky nav with services submenu + mobile drawer' },
      { label: 'Hero', path: '/hero', desc: 'Animated image grid, ambient orbs, scroll reveal' },
      { label: 'Footer', path: '/footer', desc: 'Dark footer matching nav chrome' },
    ],
  },
];

@Component({
  selector: 'srw-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly sections = SECTIONS;
}
