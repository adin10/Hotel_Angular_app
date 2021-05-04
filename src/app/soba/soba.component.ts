import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../auth/services';
import { SobaUpsertRequest } from '../shared/requests/sobaupsert.model';

import { Soba } from '../shared/soba.model';
import { SobaService } from '../_services/soba.service';

@Component({
  selector: 'app-soba',
  templateUrl: './soba.component.html',
  styleUrls: ['./soba.component.css']
})
export class SobaComponent implements OnInit {

  ListaSoba: Soba[] = [];
  slika: any;
  prijavljen : Boolean = false;
  constructor(public servis: SobaService,private authService : AuthenticationService) {
   
  }

  ngOnInit(): void {
    this.servis.getSobe().subscribe((data: any) => {
      this.ListaSoba = data;
      // let objectURL = 'data:image/jpeg;base64,' + data.image;
      // this.slika = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    })
    this.authService.user.subscribe(

      user =>{
        !user ? this.prijavljen = false : this.prijavljen = true;
      }
    );
  }
  

  obrisiSobu(item) {
    this.servis.ObrisiSobu(item).subscribe(data => {
      console.log(data);
    })
  }

  

}
