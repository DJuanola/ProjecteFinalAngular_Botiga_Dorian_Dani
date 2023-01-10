import { Component } from '@angular/core';
import { producte, items } from "../poducte";
import {ServeiService} from '../servei.service'

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css']
})

export class CatalegComponent {
  items = items;

  constructor(private  serveiService: ServeiService) {
  }
  addToCistella(producte: producte) {
    this.serveiService.addToCistella(producte);
    window.alert(`Has afegit ${producte.name} a la cistella.`);
  }
}
