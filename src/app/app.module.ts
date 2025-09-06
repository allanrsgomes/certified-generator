import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PrimaryButtonComponent } from './_components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from './_components/secundary-button/secundary-button.component';
import { CertifiedItemComponent } from './_components/certified-item/certified-item.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertificadoFormComponent } from './pages/certificado-form/certificado-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrimaryButtonComponent,
    SecundaryButtonComponent,
    CertifiedItemComponent,
    BaseUiComponent,
    CertificadosComponent,
    CertificadoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
