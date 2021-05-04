import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SobaStatusInsertRequest } from '../shared/requests/sobastatusinsert.model';
import { SobaStatus } from '../shared/sobaStatus.model';
import { SobaStatusService } from '../_services/sobStatus.service';

@Component({
  selector: 'app-soba-status',
  templateUrl: './soba-status.component.html',
  styleUrls: ['./soba-status.component.css']
})
export class SobaStatusComponent implements OnInit {

  forma:FormGroup;
  SviStatusi:SobaStatus[]=[];
  constructor(public service:SobaStatusService,private fb:FormBuilder) { }

  
  ngOnInit(): void {
    this.forma=this.fb.group({
      Status:["",[Validators.required,Validators.minLength(5)]],
      Opis:["",[Validators.required,Validators.minLength(5)]]
    })

    this.service.refreshanuListu.subscribe(()=>{
    this.getStatuse();
  })
  this.getStatuse();
  }

  getStatuse(){
    this.service.getSobeStatusi().subscribe(data=>{
      this.SviStatusi=data;
    })
  }

  Dodaj(){
    let podaci=new SobaStatusInsertRequest(this.forma.get('Status').value,this.forma.get('Opis').value);
    this.service.DodajStatus(podaci).subscribe(data=>{});
    this.forma.reset();
  }
  Obrisi(item){
    this.service.Obrisi(item).subscribe(data=>{})
  }
}
