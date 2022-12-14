import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registre-client',
  templateUrl: './registre-client.component.html',
  styleUrls: ['./registre-client.component.css']
})
export class RegistreClientComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let registreVar = document.getElementById("registre")

    // @ts-ignore
    registreVar.onclick = function registreFuncio() {
      let username, password;
      // @ts-ignore
      let usernamefield =  document.getElementById("username");
      // @ts-ignore
      username = usernamefield.value
      // @ts-ignore
      password = document.getElementById("contrasenya").value

      localStorage.setItem("nomUsuari", username)
      localStorage.setItem("contrasenyaUsuari", password)
      // @ts-ignore
      usernamefield.form.reset()
    }

    let idLogin = document.getElementById("login")

    // @ts-ignore
    idLogin.onclick = function checkData() {

      let loginform = document.getElementsByClassName("form-login")[0]

      // @ts-ignore
      let nomUsuari = loginform.nom.value
      // @ts-ignore
      let contrasenyaUsuari = password.value

      let checkUsuari = localStorage.getItem("nomUsuari")
      let checkContrasenya = localStorage.getItem("contrasenyaUsuari")

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

  }

}
