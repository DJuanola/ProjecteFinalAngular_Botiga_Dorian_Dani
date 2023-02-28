import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "express";
import {UsuarisService} from "../usuaris.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-iniciar-sessio',
  templateUrl: './iniciar-sessio.component.html',
  styleUrls: ['./iniciar-sessio.component.css']
})
export class IniciarSessioComponent  /*implements OnInit*/ {
mail:any;
password:any;
  [x: string]: any;

  correuTrobat: any;

  constructor(public router:Router, private usuariServei: UsuarisService, public firebaseAuth: AngularFireAuth ) {
  }

  async autenticar() {
    await this.firebaseAuth.signInWithEmailAndPassword(this.mail, this.password)
      .then(res => {
        this.usuariServei.autenticat = true;
        this.usuariServei.usuari = JSON.stringify(res.user);
        this.usuariServei.correuAutenticat = this.mail;
        this.correuTrobat = false;
        for (let i = 0; i<this.usuariServei.arrayClients.clients.length;i++){
          if(this.usuariServei.arrayClients.clients[i].Correu == this.mail){
            this.usuariServei.posAutenticat = i;
            this.correuTrobat = true;
            // this.router.navigate(['/'])
          }
        }
        if(!this.correuTrobat){
          alert("Sembla que no disposem de les dades d'aquest client!");
        }
      })
    if (!this.usuariServei.autenticat) {
      alert("Correu i/o contrasenya incorrectes!");
    }
  }


}


/*ngOnInit() {


  let idLogin = document.getElementById("login")

  // @ts-ignore
  idLogin.onclick = function checkData() {

    let loginform = document.getElementsByClassName("form-login")[0]

    // @ts-ignore
    let nomUsuari = loginform.nom.value
    // @ts-ignore
    let contrasenyaUsuari = password.value

    let checkUsuari = sessionStorage.getItem("nomUsuari")
    let checkContrasenya = sessionStorage.getItem("contrasenyaUsuari")

    if ((nomUsuari == checkUsuari) && (contrasenyaUsuari == checkContrasenya)) {
      alert("Sessió iniciada")

      // @ts-ignore
      localStorage.setItem("usuariSessió", nomUsuari)
      // @ts-ignore
      loginform.reset()
    } else {
      alert("error a l'iniciar sessió")
    }
  }
  let logoutonclick= document.getElementById("logout")
  // @ts-ignore
  logoutonclick.onclick= function tancarsessio(){
    window.localStorage.clear()
    alert("Sessió tancada")
  }

}*/

