import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecundaryButtonComponent } from '../secundary-button/secundary-button.component';

@Component({
  selector: 'app-certified-item',
  standalone: true,
  imports: [SecundaryButtonComponent],
  templateUrl: './certified-item.component.html',
  styleUrls: ['./certified-item.component.css']
})
export class CertifiedItemComponent {
  id: string = '6'

  constructor( private router: Router) {}

  redirectCertificate() {
    this.router.navigate(['/certificados', 2]);
  }
}
