import { Component, OnInit } from '@angular/core';
import { CertifiedItemComponent } from 'src/app/_components/certified-item/certified-item.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CertifiedItemComponent],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
