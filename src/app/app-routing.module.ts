import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CistellaComponent} from "./cistella/cistella.component";
import { CondicionsComponent} from "./condicions/condicions.component";
import { CatalegComponent} from "./cataleg/cataleg.component";
import { RegistreClientComponent} from "./registre-client/registre-client.component";
import { ContacteComponent} from "./contacte/contacte.component";
import { MenuComponent} from "./menu/menu.component";

const routes: Routes=[
  {path: 'cistella', component: CistellaComponent},
  {path: 'cataleg', component: CatalegComponent},
  {path: 'mainPage', component: MenuComponent},
  {path: 'condicions', component: CondicionsComponent},
  {path: 'registre', component: RegistreClientComponent},
  {path: 'contacte', component: ContacteComponent},
  {path: '**', redirectTo: 'mainPage'},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRoutingModule { }
