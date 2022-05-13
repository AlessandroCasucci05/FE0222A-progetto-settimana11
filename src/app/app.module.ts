import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Route[]= [
  {
     path:"",
     component: HomeComponent
  },
  {
    path:"carrello",
    component: CarrelloComponent
  },
  {
    path:":id",
    component: DettaglioComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DettaglioComponent,
    CarrelloComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
