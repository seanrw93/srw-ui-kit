import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'srw-footer-page',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './footer-page.component.html',
  styleUrl: './footer-page.component.scss',
})
export class FooterPageComponent {}
