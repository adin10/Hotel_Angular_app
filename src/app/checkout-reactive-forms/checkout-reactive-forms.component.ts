import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-checkout-reactive-forms',
  templateUrl: './checkout-reactive-forms.component.html',
  styleUrls: ['./checkout-reactive-forms.component.css']
})
export class CheckoutReactiveFormsComponent implements OnInit {

  checkoutForm:FormGroup;
  constructor(private formbuilder:FormBuilder) 
  {
    this.checkoutForm=formbuilder.group({
      email:new FormControl(),
      password:new FormControl(),
      checkboxx:new FormControl()
    })
   }
   spasi(){
     console.log(this.checkoutForm.value);
   }
  

  ngOnInit(): void {
  }

}
