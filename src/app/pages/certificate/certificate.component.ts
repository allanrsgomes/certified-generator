import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SecundaryButtonComponent } from 'src/app/_components/secundary-button/secundary-button.component';
import { CertificateService } from 'src/app/_services/certificate.service';
import { Certificate } from 'src/app/interfaces/cetificate';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [SecundaryButtonComponent, CommonModule],
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  id: string | null = null;
  certificate: Certificate | undefined

  constructor(
    private certificateService: CertificateService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.certificate = this.certificateService.certificates.find(item => item.id == this.id)
    })
  }
}
