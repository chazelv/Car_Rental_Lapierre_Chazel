import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';

const routes: Routes = [
  { path: "car-list", component: CarListComponent},
  { path: "connexion-page", component: ConnexionPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
