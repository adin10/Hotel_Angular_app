import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../auth/services';
import { Gost } from '../shared/gost.model';
import { Rezervacija } from '../shared/rezervacija.model';
import { RezervacijaService } from '../_services/rezervacija.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  isLoged = false;

  gost: Gost;
  listaRezervacija: Rezervacija[] = [];


  constructor(private authService: AuthenticationService, private rezervacijaService: RezervacijaService) { }

  ngOnInit(): void {

    this.authService.user.subscribe(data => {
      this.gost = data;
    })
    this.getRezervacije();
  }
  getRezervacije() {

    this.rezervacijaService.getRezervacije().subscribe(data => {
      this.listaRezervacija = data;
    })
  }
}



