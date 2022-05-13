import { Component, OnInit } from '@angular/core';
import { Phone } from '../interface/phone';
import { PhoneService } from '../services/phone.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CarrelloService } from '../services/carrello.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {

  //In porductDetails salvo il singolo prodotto di cui voglio vedere i dettagli. La viariabile è o indefinita
  // o di tipo Phone, che è l'interfaccia dei prodotti (in quanto tutti i prodotti sono telefoni.)

  productDetails: Phone | undefined;


  constructor(private phoneSrv:PhoneService, private router: ActivatedRoute, private carelloSrv:CarrelloService) { }

  ngOnInit(): void {

    this.router.params.subscribe((params:Params) =>{
      const id= +params['id'];
      this.phoneSrv.getSingleProduct(id).subscribe(product=>{
        this.productDetails=product;
      })
    })
  }

  addElementToCart(ele:Phone, $event:any){
    $event.preventDefault();
     this.carelloSrv.addToCarello(ele);

  }



}
