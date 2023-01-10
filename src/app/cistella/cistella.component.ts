import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServeiService } from '../servei.service';

@Component({
  selector: 'app-cistella',
  templateUrl: './cistella.component.html',
  styleUrls: ['./cistella.component.css']
})
export class CistellaComponent {
  begudes = this.cistService.getItems();
  checkoutForm = this.forma.group({});
  constructor(private cistService: ServeiService,
              private forma: FormBuilder) {
  }
  onSubmit(): void {
    this.begudes = this.cistService.clearItems();
    console.warn("La teva comanda s'ha anat cap a la cistella", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  delete(index: number) {
    this.cistService.removeItem(index);
  }

  validateInput(event:any, i:number){
    const quantitat = +event.target.value;
    if (quantitat < 1){
      event.target.value = this.begudes[i].quantitat;
      return;
    }
    this.Anotacioquant(quantitat, i)
  }
  private Anotacioquant(quantitat:number, i:number){
    this.begudes[i].quantitat = quantitat;

    this.cistService.setCartData(this.begudes)
  }

  public PreuQTotal(): number{
    let total: number = 0;
    for(let unitat of this.begudes){
      total += (unitat.quantitat * unitat.preu);
    }
    return total;
  }
}
