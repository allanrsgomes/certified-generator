import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certified-item',
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
