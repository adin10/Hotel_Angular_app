import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SobaUpsertRequest } from '../shared/requests/sobaupsert.model';
import { SobaStatus } from '../shared/sobaStatus.model';
import { SobaService } from '../_services/soba.service';
import { SobaStatusService } from '../_services/sobStatus.service';

@Component({
  selector: 'app-soba-dodaj',
  templateUrl: './soba-dodaj.component.html',
  styleUrls: ['./soba-dodaj.component.css']
})
export class SobaDodajComponent implements OnInit {
  form: FormGroup;
  listaStatusa:SobaStatus[]=[];
  public response: {
    dbPath: '',
    fileName: '',
    fullPath: ''
  };

  constructor(private servis:SobaService,private fb:FormBuilder,private statusService:SobaStatusService) { 

    this.form = this.fb.group({
      BrojSobe:  new FormControl(),
      BrojSprata: new FormControl(),
      OpisSobe: new FormControl(),
      SobaStatusId: new FormControl(),
      Slika: [null]
    })
  }
  Spasi() {
    if (this.form.invalid) {
      return;
    }

    let podaci=new SobaUpsertRequest(this.form.get('BrojSprata').value,this.form.get('BrojSobe').value,this.form.get('OpisSobe').value,this.form.get('SobaStatusId').value,this.response.fileName,this.response.dbPath);
    this.servis.dodajSobu(podaci).subscribe(
      data=>{});

    // let podaci = new SobaUpsertRequest(+this.form.get('BrojSobe').value, +this.form.get('BrojSprata').value, this.form.get('OpisSobe').value, this.form.get('Slika').value, +this.form.get('SobaStatusId').value);
    // this.servis.dodajSobu(podaci).subscribe(
    //   res => { }
    // );
  }
 
  ngOnInit(): void {
    this.statusService.getSobeStatusi().subscribe(data=>{
      this.listaStatusa=data;
    })
  }
  public uploadFinished = (event) =>{
    this.response=event;
  }

  public createImgPath = () =>{
    if(this.response!=null)
    return '${environment.apiUrl}${this.response.dbPath}';
  }
}
