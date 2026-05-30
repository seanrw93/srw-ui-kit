import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';

@Component({
  selector: 'srw-input-page',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.scss',
})
export class InputPageComponent {}
