import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { CheckoutReactiveFormsComponent } from './checkout-reactive-forms/checkout-reactive-forms.component';
import { CjenovnikComponent } from './cjenovnik/cjenovnik.component';
import { DrzavaComponent } from './drzava/drzava.component';
import { DrzaveDetaljiComponent } from './drzave-detalji/drzave-detalji.component';
import { GostComponent } from './gost/gost.component';
import { GradComponent } from './grad/grad.component';
import { NovostiComponent } from './novosti/novosti.component';
import { OsobljeComponent } from './osoblje/osoblje.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilComponent } from './profil/profil.component';
import { ReactiveFormsTuttorialComponent } from './reactive-forms-tuttorial/reactive-forms-tuttorial.component';
import { RecenzijaComponent } from './recenzija/recenzija.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { SigninComponent } from './signin/signin.component';
import { SobaDodajComponent } from './soba-dodaj/soba-dodaj.component';
import { SobaStatusComponent } from './soba-status/soba-status.component';
import { SobaComponent } from './soba/soba.component';
import { SobarezervacijaComponent } from './sobarezervacija/sobarezervacija.component';
import { StatusurediComponent } from './statusuredi/statusuredi.component';
import { UpdategradComponent } from './updategrad/updategrad.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [

 {path:'grad',component:GradComponent},
 {path:'signin',component:SigninComponent},
 {path:'drzava',component:DrzavaComponent,
 children:[       //   parent-child 
        {path:'drzavaDetalji',component:DrzaveDetaljiComponent}
 ]},
 {path:'soba-status',component:SobaStatusComponent},
 {path:'checkout',component:CheckoutReactiveFormsComponent},
 {path:"novosti",component:NovostiComponent},
 {path:'soba',component:SobaComponent},
 {path:"reactiveforms",component:ReactiveFormsTuttorialComponent},
 {path:"gosti",component:GostComponent},
 {path:"recenzija",component:RecenzijaComponent},
 {path:"auth",component:AuthComponent},
 {path:"rezervacija",component:RezervacijaComponent},
 {path:"rezervacija/:id",component:SobarezervacijaComponent},
 {path:"registracija",component:RegistracijaComponent},
 {path:"cjenovnik",component:CjenovnikComponent},
 {path:"dodajsobu",component:SobaDodajComponent},
 {path:"updateGrad/:id",component:UpdategradComponent},
 {path:"updateStatus/:id",component:StatusurediComponent},
 {path:"upload",component:UploadComponent},
 {path:"osoblje",component:OsobljeComponent},
 {path:"profil",component:ProfilComponent},
 {path:'**',component:PageNotFoundComponent}  // Kada unesemo nesto pogresno da ispise da nije tacna putanja   (wildcard routes)
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
