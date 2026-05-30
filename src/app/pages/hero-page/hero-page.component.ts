import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'srw-hero-page',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss',
})
export class HeroPageComponent {}
