import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexPaginaComponent } from './index-pagina/index-pagina.component';
import { FooterComponent } from './footer/footer.component';
import {MenuComponent} from "./menu/menu.component";
import {CatalegComponent} from "./cataleg/cataleg.component";
import {RegistreClientComponent} from "./registre-client/registre-client.component";
import {CistellaComponent} from "./cistella/cistella.component";
import {CondicionsComponent} from "./condicions/condicions.component";
import {ContacteComponent} from "./contacte/contacte.component";
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexPaginaComponent,
    FooterComponent,
    MenuComponent,
    CatalegComponent,
    RegistreClientComponent,
    CistellaComponent,
    CondicionsComponent,
    ContacteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
