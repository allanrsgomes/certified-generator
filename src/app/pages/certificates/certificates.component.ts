import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CertifiedItemComponent } from 'src/app/_components/certified-item/certified-item.component';
import { SecundaryButtonComponent } from 'src/app/_components/secundary-button/secundary-button.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CertifiedItemComponent, SecundaryButtonComponent, RouterLink],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {

}
