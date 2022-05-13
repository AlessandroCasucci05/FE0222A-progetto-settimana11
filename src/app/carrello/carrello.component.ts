import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Phone } from '../interface/phone';
import { CarrelloService } from '../services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  cart: Phone[]=[];
  total: number=0;
  myForm!: FormGroup;

  constructor(private carrelloSrv:CarrelloService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
       email: ["",[Validators.required,Validators.email]],
       indirizzo: ["",[Validators.required,Validators.minLength(4)]]
    });
     this.cart= this.carrelloSrv.getCarrello();
     this.total= this.countTotal();
  }

  countTotal():number{
    let count=0;
    let element:Phone;

    for (element of this.cart){
        count+=element.price;
    }
    return count;
  }

  get email(){
    return this.myForm.get('email');
  }

  get indirizzo(){
    return this.myForm.get("indirizzo");
  }

  buyCartProducts(){
    this.cart=[];
    this.carrelloSrv.removeFromCarello();
  }

}
