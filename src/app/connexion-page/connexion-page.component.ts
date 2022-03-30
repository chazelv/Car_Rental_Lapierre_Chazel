import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Utilisateur } from '../models/utilisateur';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.css']
})
export class ConnexionPageComponent implements OnInit {

  public utilisateur = new Utilisateur();
  public value: any;
  hide = true

  constructor(private authentification: AuthentificationService) { }

  ngOnInit(): void {
  }

  async onSubmit(form: NgForm) {
    this.authentification.authentification(form.value.login, form.value.pwd);
  }
}

