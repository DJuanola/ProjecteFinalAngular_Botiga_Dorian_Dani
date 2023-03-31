import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarisService} from "../usuaris.service";
import {Router} from "express";
import {AngularDirectiveOptionsSchema} from "@angular/cli/lib/config/workspace-schema";

@Component({
  selector: 'app-registre-client',
  templateUrl: './registre-client.component.html',
  styleUrls: ['./registre-client.component.css']
})
export class RegistreClientComponent /*implements OnInit*/ {
  autenticat= this.usuariServei.autenticat;
  nomAutenticat: any;
  correu: any;
  contrasenya: any;
  nom: any;
  cognoms: any;
  direccio: any;
  telefon: any;
  dia_naixement: any;
  mes_naixement: any;
  any_naixement: any;



  registrar(){

      this.http.post<any>('http://localhost:3080/datausers', {
        Adreça: this.direccio,
        Cognoms: this.cognoms,
        Correu: this.correu,
        Nom: this.nom,
        Telefon: this.telefon
      }).subscribe();
      this.http.post<any>('http://localhost:3080/signup', {
        email: this.correu,
        passwd: this.contrasenya
      }).subscribe();
      //this.router.navigate(['/login']);
    }


  constructor(private usuariServei: UsuarisService,public router:Router, private http:HttpClient) {
    if(this.autenticat){
      this.nomAutenticat = this.usuariServei.arrayClients.clients[this.usuariServei.posAutenticat].Nom;
    }
  }


  ngOnInit(){}



  //ngOnInit() {
  /*  let registreVar = document.getElementById("registre")

    // @ts-ignore
    registreVar.onclick = function registreFuncio() {
      let username, password;
      // @ts-ignore
      let usernamefield =  document.getElementById("username");
      // @ts-ignore
      username = usernamefield.value
      // @ts-ignore
      password = document.getElementById("contrasenya").value

      sessionStorage.setItem("nomUsuari", username)
      sessionStorage.setItem("contrasenyaUsuari", password)
      // @ts-ignore
      usernamefield.form.reset()*/
 //   }




}
