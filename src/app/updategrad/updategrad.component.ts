import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Drzava } from '../shared/drzava.model';
import { DrzavaService } from '../_services/drzava.service';
import{ActivatedRoute} from '@angular/router';
import { GradService } from '../_services/grad.service';
import { GradUpsertRequest } from '../shared/requests/gradupsert.model';

@Component({
  selector: 'app-updategrad',
  templateUrl: './updategrad.component.html',
  styleUrls: ['./updategrad.component.css']
})
export class UpdategradComponent implements OnInit {
  uredi : FormGroup;
  constructor(private servis:GradService,private route:ActivatedRoute,public drzavaServis:DrzavaService, private fb : FormBuilder) { }
  drzavafilter:Drzava[]=[];
  alert:boolean=false;

  ngOnInit(): void {
    this.uredi = this.fb.group({
      NazivGrada : ["",[Validators.required,Validators.minLength(5)]], 
      PostanskiBroj : ["",Validators.required],
      DrzavaId :["",Validators.required],
     });

     this.servis.getGradById(this.route.snapshot.params.id).subscribe((result)=>{
      this.uredi=new FormGroup({
        NazivGrada:new FormControl(result['NazivGrada']),
        PostanskiBroj:new FormControl(result['PostanskiBroj']),
        DrzavaId:new FormControl(result['DrzavaId'])
      })
     })

     this.listadrzava();
    //  console.warn(this.route.snapshot.params.id);  da nam ispise u konzoli id koji smo kliknuli
  }
  listadrzava(){
    this.drzavaServis.getDrzave().subscribe(data=>{
      this.drzavafilter=data;
    })
  }

  Uredi(){
    let podaci = new GradUpsertRequest(this.uredi.get('NazivGrada').value,+this.uredi.get('PostanskiBroj').value,+this.uredi.get('DrzavaId').value);
    this.servis.gradUpdate(this.route.snapshot.params.id,podaci).subscribe((result)=>{
      console.warn(result);
    })
    this.uredi.reset();
    this.alert=true;
  }


  CloseClick(){
  this.alert=false;
  }
}
