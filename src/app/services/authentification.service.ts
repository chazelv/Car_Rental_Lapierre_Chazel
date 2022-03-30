import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  utilisateur : Utilisateur | undefined;

  constructor(private router: Router, private snackBar : MatSnackBar) { }

   /**
   * Informer l'utilisateur sur l'état de sa requête
   * @param message texte affiché à l'utilisateur
   * @param action texte ou symbole permettant de fermer la snack bar
   */
  openSnackBar(message: string, action : string) {
    this.snackBar.open(message,action,{duration: 2000});
 }

 /**
  * Verifier que l'identifiant et le mot de passe sont enregistrés 
  * @param login login de l'utilisateur
  * @param pwd mot de passe de l'utilisateur
  */
  async authentification(login: string, pwd: string) {
    try {
      const res = await fetch('http://localhost:8080/api/v1/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:
          JSON.stringify({ login: login, pwd: pwd })
      });
      if (!res.ok)
        throw "erreur";
      this.utilisateur = await res.json();
      this.openSnackBar("Vous êtes connecté !", "OK");
      this.router.navigate(['moncompte']);
     
    }
    catch (e) {
      this.openSnackBar("Le login ou le mot de passe doivent être incorrect !", "OK");
    }
  }

  /**
   * Verifier si l'utilisateur est connecté
   * @returns true si l'utilisateur est connecté
   */
  verifierAuthentification() {
    return this.utilisateur !== undefined;
  }

  /**
   * Verifier si l'utilisateur connecté est un administrateur
   * @returns true si l'utilisateur connecté est un administrateur
   */
  verificationAdministrateur(){
    return this.utilisateur?.admin;
  }

  /**
   * Deconnecter l'utilisateur
   * @returns true si la déconnexion réussie
   */
  async deconnexion(){
    if(this.utilisateur){      
      const res = await fetch('http://localhost:8080/api/v1/admin/logout/' + this.utilisateur.login);
      const etat = await res.json();
      delete this.utilisateur
      this.openSnackBar("Déconnexion réussie !", "OK");
      return etat;
    }
  }

} 