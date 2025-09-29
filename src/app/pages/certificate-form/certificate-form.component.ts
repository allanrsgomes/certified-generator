import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PrimaryButtonComponent } from 'src/app/_components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from 'src/app/_components/secundary-button/secundary-button.component';
import { Certificate } from 'src/app/interfaces/cetificate';

@Component({
  selector: 'app-certificate-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecundaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.css']
})
export class CertificateFormComponent {
  activity: string = ''
  certificate: Certificate = {
    name: '',
    activities: []
  }

  invalidField(control: NgModel) {
    return control.invalid && control.touched
  }

  validForm() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0
  }

  addActivity() {
    this.certificate.activities.push(this.activity)
    this.activity = ''
  }

  deleteActivity(index: number) {
    this.certificate.activities.splice(index, 1)
  }

  submit() {
    if(!this.validForm()) {
      return
    }
    console.log(this.certificate)
  }

}
