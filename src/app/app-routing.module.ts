import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { CertificateFormComponent } from './pages/certificate-form/certificate-form.component';
import { CertificateComponent } from './pages/certificate/certificate.component';

const routes: Routes = [
  {
    path: "",
    component: CertificatesComponent
  },
  {
    path: "certificados/novo",
    component: CertificateFormComponent
  },
    {
    path: "certificados/:id",
    component: CertificateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
