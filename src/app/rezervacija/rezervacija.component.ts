import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gost } from '../shared/gost.model';
import { RezervacijaUpsertRequest } from '../shared/requests/rezervacijaupsert.model';
import { Rezervacija } from '../shared/rezervacija.model';
import { Soba } from '../shared/soba.model';
import { GostService } from '../_services/gost.service';
import { RezervacijaService } from '../_services/rezervacija.service';
import { SobaService } from '../_services/soba.service';

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {

  
  constructor(public service:RezervacijaService,private fb:FormBuilder,public gostservice:GostService,public sobaservice:SobaService) { }
  listaRezrevacija:Rezervacija[]=[];
  listaGostiju:Gost[]=[];
  listaSoba:Soba[]=[];
  forma:FormGroup;

  alert:boolean=false;  

  ngOnInit(): void {

    this.service.refreshanuListu.subscribe(()=>{
      this.getsveRezervacije();
    })
    this.getGoste();
    this.getSobe();
    this.getsveRezervacije();
    this.forma=this.fb.group({
      gostId:["",[Validators.required]],
      sobaId:["",Validators.required],
      DatumRezervacije:["",Validators.required],
      ZavrsetakRezervacije:["",Validators.required]
    })
  }
  getsveRezervacije(){
    this.service.getRezervacije().subscribe(data=>{
      this.listaRezrevacija=data;
    })
  }

  getGoste(){
    this.gostservice.getGosti().subscribe(data=>{
      this.listaGostiju=data;
    })
  }
  getSobe(){
this.sobaservice.getSobe().subscribe(data=>{
  this.listaSoba=data;
})
  }
  Dodaj(){
    let podaci=new RezervacijaUpsertRequest(+this.forma.get('gostId').value,+this.forma.get('sobaId').value,this.forma.get('DatumRezervacije').value,this.forma.get('ZavrsetakRezervacije').value);
    this.service.addRezervacija(podaci).subscribe(data=>{});
    this.forma.reset();
    this.alert=true;
  }

  CloseClick(){
    this.alert=false;
  }

  Obrisi(item){ 
    this.service.Obrisi(item).subscribe(data=>{});
  }
}
