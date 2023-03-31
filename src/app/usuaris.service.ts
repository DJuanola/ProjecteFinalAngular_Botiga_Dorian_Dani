import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as Http from "http";

@Injectable({
  providedIn: 'root'
})
export class UsuarisService {
  public autenticat = false;
  public posAutenticat = -1;
  public correuAutenticat: any;
  public arrayClients:any;
  public usuari: any;
  constructor(private http:HttpClient) {

    this.http.get<any>('http://localhost:3080/api/firebase').subscribe((document)=>{
      this.arrayClients=document
    })
  }
}
