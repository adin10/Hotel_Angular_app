import { Component, OnInit } from '@angular/core';
import { Cjenovnik } from '../shared/cjenovnik.model';
import { CjenovnikService } from '../_services/cjenovnik.service';
import{Soba} from '../shared/soba.model' 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CjenovnikUpsertRequest } from '../shared/requests/cjenovnikupsert.model';
import { SobaService } from '../_services/soba.service';
@Component({
  selector: 'app-cjenovnik',
  templateUrl: './cjenovnik.component.html',
  styleUrls: ['./cjenovnik.component.css']
})
export class CjenovnikComponent implements OnInit {

  constructor(public service:CjenovnikService,private fb:FormBuilder,public sobaservice:SobaService) { }
  p:number=1;

  ListaSoba:Soba[]=[];
  ListaCijena:Cjenovnik[]=[];
  forma:FormGroup;
  alert:boolean=false;   // Za ispisivanje poruke nakon dodavanja
  ngOnInit(): void {
    this.service.refreshanuListu.subscribe(()=>{
      this.getGradove();
    });
    this.getGradove();
    this.Getsobe();
    this.forma=this.fb.group({
      SobaId:["",[Validators.required]],
      BrojDana:["",Validators.required],
      Cijena:["",[Validators.required]]
    })
  }

Getsobe(){
  this.sobaservice.getSobe().subscribe(data=>{
    this.ListaSoba=data;
  })
}

  getGradove(){
    this.service.getCijene().subscribe(data=>{
      this.ListaCijena=data;
    })
  }
  Spasi(){
    if(this.forma.invalid){
      return;
    }
    let podaci=new CjenovnikUpsertRequest(+this.forma.get('SobaId').value,+this.forma.get('BrojDana').value,+this.forma.get('Cijena').value );
    this.service.dodajCijenu(podaci).subscribe(
      data=>{})
      this.alert=true;       // Prikazi poruku
      this.forma.reset();  // nakon dodavanja ocisti formu
  }
  CloseClick(){
    this.alert=false;
  }
  Obrisi(id){
    this.service.Obrisi(id).subscribe(data=>{});
  }
}
