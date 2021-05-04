import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Osoblje } from '../shared/osoblje.model';
import { OsobljeUpsertRequest } from '../shared/requests/osobljeupsert.model';
import { OsobljeService } from '../_services/osoblje.service';

@Component({
  selector: 'app-osoblje',
  templateUrl: './osoblje.component.html',
  styleUrls: ['./osoblje.component.css']
})
export class OsobljeComponent implements OnInit {

  constructor(public service:OsobljeService,private fb:FormBuilder) { }

  listaOsoblja:Osoblje[]=[];
  forma:FormGroup;
  public response: {
    dbPath: '',
    fileName: '',
    fullPath: ''
  };

  ngOnInit(): void {
    this.getsvoOsoblje();
    this.forma=this.fb.group({
      Ime:new FormControl(),
      Prezime:new FormControl(),
      Email:new FormControl(),
      KorisnickoIme:new FormControl(),
      Telefon:new FormControl()
    })
  }

   getsvoOsoblje(){
    this.service.getOsoblje().subscribe(data=>{
      this.listaOsoblja=data;
    })
  }

  Spasi(item){
    // let podaci=new OsobljeUpsertRequest(this.forma.get('Ime').value,this.forma.get('Prezime').value,this.forma.get('Email').value,this.forma.get('KorisnickoIme').value,this.forma.get('Telefon').value);
    // this.service.addOsoblje(podaci).subscribe(data=>{})
  }
  public uploadFinished = (event) =>{
    this.response=event;
  }


  public createImgPath = () =>{
    if(this.response!=null)
    return '${environment.apiUrl}${this.response.dbPath}';
  }
}
