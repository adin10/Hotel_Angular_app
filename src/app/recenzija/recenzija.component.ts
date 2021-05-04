import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth/services';
import { Gost } from '../shared/gost.model';
import { RecenzijaUpsertRequest } from '../shared/requests/recenzijaupsert.model';
import { Soba } from '../shared/soba.model';
import { RecenzijaService } from '../_services/recenzija.service';
import { SobaService } from '../_services/soba.service';

@Component({
  selector: 'app-recenzija',
  templateUrl: './recenzija.component.html',
  styleUrls: ['./recenzija.component.css']
})
export class RecenzijaComponent implements OnInit {
  alert:boolean=false;  
  listasoba:Soba[]=[];
  gost:Gost;
  form:FormGroup
  constructor(public sobaservice:SobaService,public authService:AuthenticationService,private fb:FormBuilder,public service:RecenzijaService) {
    this.form=this.fb.group({
      gostId:["",[Validators.required]],
      sobaId:["",[Validators.required]],
      ocjena:["",[Validators.required]],
      komentar:["",[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.authService.user.subscribe(data=>{
      this.gost=data;
    })
    this.getsveSobe();
  }

  getsveSobe(){
    this.sobaservice.getSobe().subscribe(data=>{
      this.listasoba=data;
    })
  }
  Spasi(){
    let podaci=new RecenzijaUpsertRequest(+this.form.get('gostId').value,+this.form.get('sobaId').value,+this.form.get('ocjena').value,this.form.get('komentar').value);
    this.service.dodajRecenziju(podaci).subscribe(data=>{});
    this.form.reset();
    this.alert=true;
  }
  CloseClick(){
    this.alert=false;
  }
}
