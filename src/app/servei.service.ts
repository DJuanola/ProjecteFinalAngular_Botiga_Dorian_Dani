import { Injectable } from '@angular/core';
import {items, producte} from "./poducte";

@Injectable({
  providedIn: 'root'
})
export class ServeiService {
  items: producte[] = [];

  addToCistella(producte: producte) {
    this.items.push(producte);
    console.log("PUSH" + this.items)
  }

  getItems() {
    console.log("GET" + this.items)
    return this.items;
  }

  clearItems() {
    this.items = [];

    return this.items;
  }

  removeItem(index: any) {
    this.items.splice(index, 1);
  }

  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data))
  }
}
