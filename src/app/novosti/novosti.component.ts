import { Component, OnInit } from '@angular/core';
import { Novosti } from '../shared/novosti.model';
import { NovostiService } from '../_services/novosti.service';

@Component({
  selector: 'app-novosti',
  templateUrl: './novosti.component.html',
  styleUrls: ['./novosti.component.css']
})
export class NovostiComponent implements OnInit {

  constructor(public service:NovostiService) { }

  listaNovosti:Novosti[]=[];
 

  ngOnInit(): void {
    this.service.getNovosti().subscribe(data=>{
      this.listaNovosti=data;
    })
  }
 

}
