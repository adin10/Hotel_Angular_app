import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Grad } from '../shared/grad.model';
import { GostUpsertRequest } from '../shared/requests/gostupsert.model';
import { GostService } from '../_services/gost.service';
import { GradService } from '../_services/grad.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  ListaGradova:Grad[]=[];
  alert:boolean=false;  
  forma:FormGroup;
  constructor(public gradservice:GradService, public service:GostService,private fb:FormBuilder) {
    this.forma=this.fb.group({
      Ime: ["",Validators.required],
      Prezime: ["",Validators.required],
      Email: ["",Validators.required],
      Telefon: ["",Validators.required],
      GradId: ["",Validators.required],
      KorisnickoIme: ["",Validators.required],
      Lozinka: ["",Validators.required],
      PotvriLozinku: ["",Validators.required]
    })
   }

  ngOnInit(): void {
 
    
   
    this.getGradove();
  }



  getGradove(){
    this.gradservice.getGradovi().subscribe(data=>{
      this.ListaGradova=data;
    })
  }

  RegistrujSe(){
    let podaci=new GostUpsertRequest(this.forma.get('Ime').value,this.forma.get('Prezime').value,this.forma.get('Email').value,this.forma.get('Telefon').value,+this.forma.get('GradId').value
    ,this.forma.get('KorisnickoIme').value,this.forma.get('Lozinka').value,this.forma.get('PotvriLozinku').value);
    this.service.addGost(podaci).subscribe(data=>{});
    this.forma.reset();
    this.alert=true;
  }
  CloseClick(){
    this.alert=false;
  }
}
