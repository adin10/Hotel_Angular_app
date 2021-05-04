import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SpasiPodatke(signInForm:NgForm){
    console.log(signInForm.value.emailAdresValue),
    console.log(signInForm.value.passwordValueField)
  }
}
