import { Component } from '@angular/core';

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

      sessionStorage.setItem("nomUsuari", username)
      sessionStorage.setItem("contrasenyaUsuari", password)
      // @ts-ignore
      usernamefield.form.reset()
    }


  }

}
