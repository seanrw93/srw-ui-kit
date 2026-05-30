import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

const GRID_COLORS = [
  'linear-gradient(135deg,#2a2521 0%,#3d3530 100%)',
  'linear-gradient(135deg,#1e1b18 0%,#c8b89a44 100%)',
  'linear-gradient(135deg,#3d3530 0%,#2a2521 100%)',
  'linear-gradient(135deg,#2a2521 0%,#b8a88a44 100%)',
  'linear-gradient(135deg,#1e1b18 0%,#3d3530 100%)',
  'linear-gradient(135deg,#3d3530 0%,#c8b89a33 100%)',
];

@Component({
  selector: 'srw-hero',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly gridColors = GRID_COLORS;
}