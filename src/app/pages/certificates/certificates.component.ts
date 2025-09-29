import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CertifiedItemComponent } from 'src/app/_components/certified-item/certified-item.component';
import { SecundaryButtonComponent } from 'src/app/_components/secundary-button/secundary-button.component';
import { CertificateService } from 'src/app/_services/certificate.service';
import { Certificate } from 'src/app/interfaces/cetificate';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CertifiedItemComponent, SecundaryButtonComponent, RouterLink],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[] = []
  constructor(private certificateService: CertificateService) { }

  ngOnInit(): void {
    this.certificates = this.certificateService.certificates
  }
}
