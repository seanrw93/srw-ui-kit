import { Component, Input } from '@angular/core';

export type LinkVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent-dark';
export type LinkSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'srw-a-link',
  standalone: true,
  templateUrl: './a-link.component.html',
  styleUrl: './a-link.component.scss',
})
export class ALinkComponent {
  @Input() variant: LinkVariant = 'primary';
  @Input() size: LinkSize = 'md';
  @Input() href: string = '#';
  @Input() external = false;
  @Input() disabled = false;
}
