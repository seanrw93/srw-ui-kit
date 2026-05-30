import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const CONTACT_LINKS = [
  { icon: '✉', label: 'hello@srw-dev.com', href: 'mailto:hello@srw-dev.com' },
  { icon: 'in', label: 'LinkedIn', href: '#' },
  { icon: 'gh', label: 'GitHub', href: '#' },
  { icon: '◷', label: 'Book a call on Calendly', href: '#' },
];

@Component({
  selector: 'srw-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  readonly contactLinks = CONTACT_LINKS;
  readonly status = signal<FormStatus>('idle');

  name = '';
  email = '';
  reqtype = '';
  message = '';

  async submit(event: Event): Promise<void> {
    event.preventDefault();
    this.status.set('sending');
    // Simulate async submit for demo
    await new Promise(r => setTimeout(r, 1200));
    this.status.set('success');
  }

  reset(): void {
    this.name = '';
    this.email = '';
    this.reqtype = '';
    this.message = '';
    this.status.set('idle');
  }
}