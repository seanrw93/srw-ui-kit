import { Component } from '@angular/core';
import { ALinkComponent } from '../../shared/components/a-link/a-link.component';

@Component({
  selector: 'srw-link-page',
  standalone: true,
  imports: [ALinkComponent],
  templateUrl: './link-page.component.html',
  styleUrl: './link-page.component.scss',
})
export class LinkPageComponent {}
