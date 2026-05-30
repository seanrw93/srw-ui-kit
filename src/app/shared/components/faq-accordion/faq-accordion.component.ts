import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ: FaqItem[] = [
  {
    question: 'How much does a professional website cost?',
    answer: 'A professional brochure site starts from £499, depending on the number of pages and required features. The price reflects the time spent understanding your business, crafting the design, and delivering a fast, Google-visible site. Free quote within 24h, no obligation.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A brochure site is typically delivered in 7–14 days. An e-commerce store takes 2–3 weeks. You receive an exact delivery date in the quote, and it\'s always honoured.',
  },
  {
    question: 'Can I update the site myself after delivery?',
    answer: 'Yes. Every site is delivered with a handover session so you can update text, photos, and information without outside help. Monthly maintenance packages are also available if you prefer to delegate.',
  },
  {
    question: 'Will my site appear on Google?',
    answer: 'Yes. Every site is configured with essential SEO foundations: optimised titles and descriptions, clean page structure, fast load times, and full mobile compatibility. You start from a solid base for ranking on searches related to your business.',
  },
  {
    question: 'What is the difference between a page builder and a custom site?',
    answer: 'Page builders like Wix or Squarespace are quick to launch but often slow, poorly indexed on Google, and hard to customise. A custom site is built for your specific business, optimised from day one, and delivered without platform limitations.',
  },
  {
    question: 'What happens after the site goes live?',
    answer: 'You receive the finished, hosted, live site along with a brief handover. I remain available by message for questions in the first few days. For ongoing support, I offer a monthly retainer with no long-term contract.',
  },
];

@Component({
  selector: 'srw-faq-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.scss',
})
export class FaqAccordionComponent {
  readonly items = FAQ;
  readonly openIndex = signal<number | null>(null);

  toggle(i: number): void {
    this.openIndex.update(v => (v === i ? null : i));
  }
}