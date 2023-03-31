import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'ProjecteFinalAngular_Botiga_Dorian_Dani';


  constructor(private http: HttpClient) {

    this.http.get<any>("http://localhost:3080/api/firebase").forEach((client) =>
      console.log(client)
    )


  }

}
