import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SobaStatusInsertRequest } from '../shared/requests/sobastatusinsert.model';
import { SobaStatusService } from '../_services/sobStatus.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-statusuredi',
  templateUrl: './statusuredi.component.html',
  styleUrls: ['./statusuredi.component.css']
})
export class StatusurediComponent implements OnInit {

  forma:FormGroup
  constructor(private service:SobaStatusService,private route:ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.service.getStatusById(this.route.snapshot.params.id).subscribe((result)=>{
      this.forma=new FormGroup({
        Status:new FormControl(result['Status']),
        Opis:new FormControl(result['Opis'])
      })
    })
  }
  Uredi(){
    let podaci=new SobaStatusInsertRequest(this.forma.get('Status').value,this.forma.get('Opis').value);
    this.service.statusUpdate(this.route.snapshot.params.id,podaci).subscribe(data=>{});
    this.forma.reset();
  }
}
