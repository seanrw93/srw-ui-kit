import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'srw-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  name = '';
  email = '';
  reqtype = '';
  message = '';

  readonly links = [
    { icon: '✉', label: 'hello@srw-dev.com', href: 'mailto:hello@srw-dev.com' },
    { icon: 'in', label: 'LinkedIn', href: '#' },
    { icon: 'gh', label: 'GitHub', href: '#' },
    { icon: '◷', label: 'Book a call on Calendly', href: '#' },
  ];

  async submit(e: Event) {
    e.preventDefault();
    this.status.set('sending');
    await new Promise(r => setTimeout(r, 1200));
    this.status.set('success');
  }

  reset() {
    this.name = this.email = this.reqtype = this.message = '';
    this.status.set('idle');
  }
}
