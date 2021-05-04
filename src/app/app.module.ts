import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradComponent } from './grad/grad.component';
import { DrzavaComponent } from './drzava/drzava.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SobaStatusComponent } from './soba-status/soba-status.component';
import { SobaComponent } from './soba/soba.component';
import { GostComponent } from './gost/gost.component';
import { CjenovnikComponent } from './cjenovnik/cjenovnik.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DrzaveDetaljiComponent } from './drzave-detalji/drzave-detalji.component';
import { SigninComponent } from './signin/signin.component';
import{FormsModule} from '@angular/forms';
import { NovostiComponent } from './novosti/novosti.component';
import { CheckoutReactiveFormsComponent } from './checkout-reactive-forms/checkout-reactive-forms.component';
import{ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormsTuttorialComponent } from './reactive-forms-tuttorial/reactive-forms-tuttorial.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DrzavaService } from './_services/drzava.service';
import { UploadComponent } from './upload/upload.component';
import { UpdategradComponent } from './updategrad/updategrad.component';
import { OsobljeComponent } from './osoblje/osoblje.component';
import{Ng2SearchPipeModule} from 'ng2-search-filter';  // Filter pretraga
import {Ng2OrderModule} from 'ng2-order-pipe';       // Sortiranje
import{NgxPaginationModule} from 'ngx-pagination';
import { SobaDodajComponent } from './soba-dodaj/soba-dodaj.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { StatusurediComponent } from './statusuredi/statusuredi.component';
import { SobarezervacijaComponent } from './sobarezervacija/sobarezervacija.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { AuthComponent } from './auth/auth/auth.component';    // Za broj podataka na stranici
import { BasicAuthInterceptor, ErrorInterceptor } from './auth/helper';
import { RecenzijaComponent } from './recenzija/recenzija.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    GradComponent,
    DrzavaComponent,
    SobaStatusComponent,
    SobaComponent,
    GostComponent,
    CjenovnikComponent,
    PageNotFoundComponent,
    DrzaveDetaljiComponent,
    SigninComponent,
    NovostiComponent,
    CheckoutReactiveFormsComponent,
    ReactiveFormsTuttorialComponent,
    HeaderComponent,
    FooterComponent,
    UploadComponent,
    UpdategradComponent,
    OsobljeComponent,
    SobaDodajComponent,
    RezervacijaComponent,
    StatusurediComponent,
    SobarezervacijaComponent,
    RegistracijaComponent,
    AuthComponent,
    RecenzijaComponent,
    ProfilComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
