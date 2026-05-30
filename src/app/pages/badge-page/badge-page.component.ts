import { Component } from '@angular/core';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({
  selector: 'srw-badge-page',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './badge-page.component.html',
  styleUrl: './badge-page.component.scss',
})
export class BadgePageComponent {}
