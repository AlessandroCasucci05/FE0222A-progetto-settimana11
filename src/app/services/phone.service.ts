import { Injectable } from '@angular/core';
import { Phone } from '../interface/phone';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  urlDB= 'http://localhost:4201/products';

  constructor(private http: HttpClient) {
  }

  //Funzione che chiama tutti i prodotti del json per la pagina home

  getProducts(){
    return this.http.get<Phone[]>(this.urlDB).pipe(catchError(err=>{
         return throwError(() => new Error(err));
    }));
  };

  // Funzione che chiama un singolo prodotto del json in base al suo id, per visualizzarne i dettagli

  getSingleProduct(id:number){
     return this.http.get<Phone>(`${this.urlDB}/${id}`);
  }



}
