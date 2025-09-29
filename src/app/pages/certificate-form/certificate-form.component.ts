import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimaryButtonComponent } from 'src/app/_components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from 'src/app/_components/secundary-button/secundary-button.component';
import { CertificateService } from 'src/app/_services/certificate.service';
import { Certificate } from 'src/app/interfaces/cetificate';
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-certificate-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecundaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.css']
})
export class CertificateFormComponent {

  constructor(
    private certificateService: CertificateService,
    private route: Router
  ) { }
  @ViewChild('form') form!: NgForm
  activity: string = ''
  certificate: Certificate = {
    id: '',
    name: '',
    activities: [],
    issueDate: ''
  }

  invalidField(control: NgModel) {
    return control.invalid && control.touched
  }

  validForm() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0
  }

  addActivity() {
    if (this.activity.length == 0) {
      return
    }
    this.certificate.activities.push(this.activity)
    this.activity = ''
  }

  deleteActivity(index: number) {
    this.certificate.activities.splice(index, 1)
  }

  currentDate() {
    const currentDate = new Date()
    const day = String(currentDate.getDate()).padStart(2, '0')
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const year = currentDate.getFullYear()
    const formattedDate = `${day}/${month}/${year}`
    return formattedDate
  }

  certifiedInitialState(): Certificate {
    return {
      id: '',
      name: '',
      activities: [],
      issueDate: ''
    }
  }

  submit() {
    if (!this.validForm()) {
      return
    }
    this.certificate.issueDate = this.currentDate()
    this.certificate.id = uuidv4()
    this.certificateService.addCertificate(this.certificate)
    this.route.navigate(['certificados', this.certificate.id])
  }
}
