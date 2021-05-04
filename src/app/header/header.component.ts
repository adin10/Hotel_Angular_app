import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../auth/services';
import { Gost } from '../shared/gost.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  gost:Gost;

  isLoged = false;
  
  userSub : Subscription;
  constructor(private authService : AuthenticationService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(

      user => { this.isLoged = !user ? false : true;}
     );
     this.authService.user.subscribe(data=>{
      this.gost=data;
    })
  }
  logout(){

    this.authService.logout();
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
