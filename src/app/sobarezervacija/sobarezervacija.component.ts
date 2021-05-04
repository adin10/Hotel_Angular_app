import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../auth/services';
import { Gost } from '../shared/gost.model';
import { RezervacijaUpsertRequest } from '../shared/requests/rezervacijaupsert.model';
import { Rezervacija } from '../shared/rezervacija.model';
import { Soba } from '../shared/soba.model';
import { SobaDodajComponent } from '../soba-dodaj/soba-dodaj.component';
import { GostService } from '../_services/gost.service';
import { RezervacijaService } from '../_services/rezervacija.service';
import { SobaService } from '../_services/soba.service';

@Component({
  selector: 'app-sobarezervacija',
  templateUrl: './sobarezervacija.component.html',
  styleUrls: ['./sobarezervacija.component.css']
})
export class SobarezervacijaComponent implements OnInit {
  forma: FormGroup;
  alert: boolean = false;
  gost:Gost;
  listaRezrevacija: Rezervacija[] = [];
  gostRezervacija:Rezervacija[]=[];      // Rezervacije po gostu
  listaGostiju: Gost[] = [];
  listaSoba: Soba[] = [];
  constructor(public service: RezervacijaService,private route:ActivatedRoute, private fb: FormBuilder, public gostservice: GostService, public sobaservice: SobaService,public authService:AuthenticationService) { }

  ngOnInit(): void {
    this.service.refreshanuListu.subscribe(()=>{
      this.getsveRezervacije();
    })
    this.getGoste();
    this.getSobe();
    this.getsveRezervacije();
    this.authService.user.subscribe(data=>{
      this.gost=data;
    })
    
    this.forma=this.fb.group({
      gostId:["",[Validators.required]],
      sobaId:["",Validators.required],
      DatumRezervacije:["",Validators.required],
      ZavrsetakRezervacije:["",Validators.required]
    })

    // this.sobaservice.getSobaById(this.route.snapshot.params.id).subscribe((result)=>{
    //   this.forma=new FormGroup({
    //     gostId:new FormControl(),
    //     sobaId:new FormControl(result['sobaId']),
    //     DatumRezervacije:new FormControl(result['DatumRezervacije']),
    //     ZavrsetakRezervacije:new FormControl(result['ZavrsetakRezervacije']),
    //   })
    // })
  
  }

  getsveRezervacije() {
    this.service.getRezervacije().subscribe(data => {
      this.listaRezrevacija = data;
    })
  }

  getGoste() {
    this.gostservice.getGosti().subscribe(data => {
      this.listaGostiju = data;
    })
  }
  getSobe() {
    this.sobaservice.getSobe().subscribe(data => {
      this.listaSoba = data;
    })
  }

  Dodaj() {
    let podaci = new RezervacijaUpsertRequest(+this.forma.get('gostId').value, +this.forma.get('sobaId').value, this.forma.get('DatumRezervacije').value, this.forma.get('ZavrsetakRezervacije').value);
    this.service.addRezervacija(podaci).subscribe(data => { });
    this.forma.reset();
    this.alert = true;
  }


  // Rezervacije po gostu
  RezervacijGosta(){


    if(this.gost != null){
      this.listaRezrevacija.forEach(rezervacija => {
        if(rezervacija.GostId == this.gost.Id){
          this.gostRezervacija.push(rezervacija);
        }
    });
    }  
  }
  
}
