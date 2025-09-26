import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from 'src/app/_components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from 'src/app/_components/secundary-button/secundary-button.component';

@Component({
  selector: 'app-certificate-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecundaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.css']
})
export class CertificateFormComponent {
  name: string = ''
  activity: string = ''
  activities: string[] = ['Angular', 'React']
}
