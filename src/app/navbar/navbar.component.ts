import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../services/carrello.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  counter:number=0;

  constructor(private carrellSrv:CarrelloService) { }

  ngOnInit(): void {
    this.carrellSrv.aggiornato.subscribe(num=>{
      this.counter=num;
    })
  }



}
