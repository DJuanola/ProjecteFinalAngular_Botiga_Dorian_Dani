import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-iniciar-sessio',
  templateUrl: './iniciar-sessio.component.html',
  styleUrls: ['./iniciar-sessio.component.css']
})
export class IniciarSessioComponent  implements OnInit {
ngOnInit() {


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
