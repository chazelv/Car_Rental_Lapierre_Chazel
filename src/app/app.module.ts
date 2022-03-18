import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { NavbarComponent } from './Homepage/navbar/navbar/navbar.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    NavbarComponent,
    ConnexionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
