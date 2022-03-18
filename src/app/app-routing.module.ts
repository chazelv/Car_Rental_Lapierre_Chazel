import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { CarListComponent } from './cars/car-list/car-list.component';

const routes: Routes = [
  { path: "car-list", component: CarListComponent},
  { path: "car-details", component: CarDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
