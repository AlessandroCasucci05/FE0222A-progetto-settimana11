import { Component, OnInit } from '@angular/core';
import { Phone } from '../interface/phone';
import { PhoneService } from '../services/phone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Phone[] |undefined;


  constructor(private PhoneSrv: PhoneService) {


  }

  ngOnInit(): void {

     this.PhoneSrv.getProducts().subscribe(cards=>{
       this.products= cards;
     }, (err) =>{
        console.log(err);
     })
  }

}
