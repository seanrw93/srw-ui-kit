import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'srw-navbar-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './navbar-page.component.html',
  styleUrl: './navbar-page.component.scss',
})
export class NavbarPageComponent {}
