import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Phone } from '../interface/phone';
@Injectable({
  providedIn: 'root'
})
export class CarrelloService {


 public carrello: Phone[] = [];
 private contatore= new BehaviorSubject(0);
 aggiornato = this.contatore.asObservable();


  constructor() { }

  addToCarello(ele:Phone){
     this.carrello.push(ele);
     this.contatore.next(this.carrello.length);
  }

  removeFromCarello(){
     this.carrello=[];
     this.contatore.next(this.carrello.length);
  }

  getCarrello(){
    return this.carrello;
  }


}

