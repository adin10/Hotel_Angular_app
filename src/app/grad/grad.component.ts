import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Drzava } from '../shared/drzava.model';
import { Grad } from '../shared/grad.model';
import { GradUpsertRequest } from '../shared/requests/gradupsert.model';
import { DrzavaService } from '../_services/drzava.service';
import{GradService} from '../_services/grad.service';

@Component({
  selector: 'app-grad',
  templateUrl: './grad.component.html',
  styleUrls: ['./grad.component.css']
})
export class GradComponent implements OnInit {
  
  forma : FormGroup;
  NazivGrada:any;
  PostanskiBroj:any;
  p:number=1;  // Za prelazak s jedne na drugu stranicu
  constructor(public service:GradService,public drzavaServis:DrzavaService, private fb : FormBuilder) { }
  listaGradova : Grad[]=[];
  alert:boolean=false;   // Za ispisivanje poruke nakon dodavanja
  drzavafilter:Drzava[]=[];
  
  ngOnInit(): void {

    this.service.refreshanuListu.subscribe(()=>{
      this.refreshGradove();
    });
    this.refreshGradove();
   
    this.listadrzava();

   this.forma = this.fb.group({
    NazivGrada : ["",[Validators.required,Validators.minLength(5)]], // ovo ukoliko hoces da je obavezan
    PostanskiBroj : ["",Validators.required],
    DrzavaId :["",Validators.required],
    
   });
  }
  
  
  private refreshGradove(){
    this.service.getGradovi().subscribe(data=>{
      this.listaGradova=data;
    })
  }

  
  listadrzava(){
    this.drzavaServis.getDrzave().subscribe(data=>{
      this.drzavafilter=data;
    })
  }




//Dodavanje
  onSubmit(){        

    if(this.forma.invalid){
      return;
    }

    let podaci = new GradUpsertRequest(this.forma.get('NazivGrada').value,+this.forma.get('PostanskiBroj').value,+this.forma.get('DrzavaId').value);
        
    // <img [src]="'data:image/jpeg;base64,'+putnik.slika" class="img-responsive" /> // ovo probaj za sliku
    this.service.dodajGrad(podaci).subscribe(
      res =>{}
    );
    this.alert=true;       // Prikazi poruku
      this.forma.reset();  // nakon dodavanja ocisti formuv
  }


//Brisanje
  ObrisiGrad(item){
    this.listaGradova.splice(item-1,1);  // Za brisanje iz liste
    this.service.ObrisiGrad(item).subscribe(data=>{
      console.log(data);
    })
  }



//Dugme zatvori
  CloseClick(){
    this.alert=false;
  }



  // Filter za pretragu naziva grada
  Search(){
    if(this.NazivGrada==""){
      this.ngOnInit();
    }
    else{
      this.listaGradova=this.listaGradova.filter(res=>{
        return res.NazivGrada.toLocaleLowerCase().match(this.NazivGrada.toLocaleLowerCase());
      })
    }
  }

  
//sortiranje

  key:string='id';
  reverse:boolean=false;
  sort(key){
    this.key=key;
    this.reverse= !this.reverse;
  }


}


