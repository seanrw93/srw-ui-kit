import { Component } from '@angular/core';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'srw-alert-page',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './alert-page.component.html',
  styleUrl: './alert-page.component.scss',
})
export class AlertPageComponent {}
