import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http'
/** npm install ngx-bootstrap --save */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoNutrimentalComponent } from './info-nutrimental/info-nutrimental.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListaPorcionesComponent } from './home/lista-porciones/lista-porciones.component';
import { PorcionesElementoComponent } from './home/lista-porciones/porciones-elemento/porciones-elemento.component';
import { PorcionesCardsComponent } from './home/porciones-cards/porciones-cards.component';
import { FooterComponent } from './footer/footer.component';
import { ComidasCardsComponent } from './home/comidas-cards/comidas-cards.component';
import { ModalModule } from 'ngx-bootstrap';
import { DemoModalServiceStaticComponent } from './header/ngx-bootstrap-demo.component'
import { LoginService } from './login.service';
import { PlanesComponent } from './planes/planes.component';
import { CardsComponent } from './planes/cards/cards.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CardsPersonalesComponent } from './planes/cards-personales/cards-personales.component';
import { RegistrarModal } from './header/registrar-modal.component';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatNativeDateModule } from "@angular/material";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MaterialModule } from './material/material.module'





@NgModule({
  declarations: [
    AppComponent,
    InfoNutrimentalComponent,
    HeaderComponent,
    HomeComponent,
    ListaPorcionesComponent,
    PorcionesElementoComponent,
    PorcionesCardsComponent,
    FooterComponent,
    ComidasCardsComponent,
    DemoModalServiceStaticComponent,
    PlanesComponent,
    CardsComponent,
    AboutUsComponent,
    CardsPersonalesComponent,
    RegistrarModal
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    FormsModule
  ],
//  entryComponents: [InfoNutrimentalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
