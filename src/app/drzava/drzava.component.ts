import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Drzava } from '../shared/drzava.model';
import { DrzavaUpsertRequest } from '../shared/requests/drzavaupsert.model';
import { DrzavaService } from '../_services/drzava.service';

@Component({
  selector: 'app-drzava',
  templateUrl: './drzava.component.html',
  styleUrls: ['./drzava.component.css']
})
export class DrzavaComponent implements OnInit {

  forma:FormGroup;
  constructor(public servis:DrzavaService,private formbuilder:FormBuilder) {
    this.forma=this.formbuilder.group({
      Naziv:["",[Validators.required,Validators.minLength(5)]]
    })
   }
  drzaveLista:Drzava[]=[];
  
  
  
 

  ngOnInit(): void {
    this.servis.getDrzave().subscribe(data=>{
      this.drzaveLista=data;
    })
    
 }
 Spasi(){
   let podaci=new DrzavaUpsertRequest(this.forma.get('Naziv').value);
   this.servis.dodajDrzavu(podaci).subscribe(
     res=>{})
 }
}


