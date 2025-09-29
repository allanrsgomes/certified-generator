import { Injectable } from '@angular/core';
import { Certificate } from '../interfaces/cetificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  certificates: Certificate[] = []

  constructor() { }

  addCertificate(certificate: Certificate) {
    this.certificates.unshift({...certificate})
    localStorage.setItem('certificates', JSON.stringify(this.certificates))
  }
}
