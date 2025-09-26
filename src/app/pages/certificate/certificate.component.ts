import { Component, OnInit } from '@angular/core';
import { SecundaryButtonComponent } from 'src/app/_components/secundary-button/secundary-button.component';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [SecundaryButtonComponent],
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
