import { Component, OnInit } from '@angular/core';
import { CertificateService } from './_services/certificate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gerador-certificado'

  constructor(private certificateService: CertificateService) { }

  ngOnInit(): void {
    const certificates = localStorage.getItem('certificates')
    this.certificateService = certificates ? JSON.parse(certificates) : []
  }
}
