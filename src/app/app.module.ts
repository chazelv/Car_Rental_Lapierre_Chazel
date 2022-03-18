import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { NavbarComponent } from './Homepage/navbar/navbar/navbar.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    NavbarComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
