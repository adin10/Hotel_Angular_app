import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms-tuttorial',
  templateUrl: './reactive-forms-tuttorial.component.html',
  styleUrls: ['./reactive-forms-tuttorial.component.css']
})
export class ReactiveFormsTuttorialComponent implements OnInit {

  reactive:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.reactive=formBuilder.group({
      email:["",[Validators.required,Validators.email,Validators.minLength(5)]],
      pass:new FormControl(),
      check:["",Validators.required]
    })
   }
   Spasi(){
    console.log(this.reactive.value);  // ispisi vrijednosti unesenih u formi
    console.log(this.reactive.value.email)  // ispis samo emaila
    this.Ocisti();
  }
  unesenaSlova:string;
  ngOnInit(): void {
    // this.reactive.get('email').valueChanges.subscribe(data=>{      // Ispisivanje unesenog maila
    //   this.unesenaSlova=data;


    // this.reactive.valueChanges.subscribe(data=>{       // Ispisivanje citave forme
    //   console.log(data);


      // this.reactive.get('email').statusChanges.subscribe(data=>{
      //   console.log(data);
      // })

      this.reactive.statusChanges.subscribe(data=>{
        console.log(data);
      })
    // })
  // })
   


    // this.reactive.setValue({     // Postavljanje vrijednosti prilikom pokretanja forme, kada koristimo setvalue moramo svakom polju postaviti vrijednost
    //   email:'adin.smajkic@edu.fit.ba',
    //   pass:"abcdefghijkl",
    //   check:true
    this.reactive.patchValue({     // Postavljanje vrijednosti prilikom pokretanja forme, kada koristimo patchvalue ne moramo svakom polju staviti vrijednost, mozemo po svom izboru
      email:'adin.smajkic@edu.fit.ba',
      // pass:"abcdefghijkl"
    })
  }
 
  Ocisti(){
    this.reactive.reset(); // Brisanje podataka u formi
  }

}
