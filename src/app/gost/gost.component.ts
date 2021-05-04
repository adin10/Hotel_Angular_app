import { Component, OnInit } from '@angular/core';
import { Gost } from '../shared/gost.model';
import { GostService } from '../_services/gost.service';

@Component({
  selector: 'app-gost',
  templateUrl: './gost.component.html',
  styleUrls: ['./gost.component.css']
})
export class GostComponent implements OnInit {

  constructor(public service:GostService) { }
  ListaGostiju:Gost[]=[];

  ngOnInit(): void {
    this.service.getGosti().subscribe(data=>{
      this.ListaGostiju=data;
    })
  }

}
