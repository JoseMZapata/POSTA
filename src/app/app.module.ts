import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { RelojComponent } from './components/reloj/reloj.component';
import { NoticiasTopComponent } from './components/noticias-top/noticias-top.component';
import { NoticiasTechComponent } from './components/noticias-salud/noticias-tech.component';
import { RelojTechComponent } from './components/reloj-tech/reloj-tech.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { RelojSaluComponent } from './components/reloj-salu/reloj-salu.component';
import { NoticiasDeporComponent } from './components/noticias-depor/noticias-depor.component';
import { NoticiasCienciaComponent } from './components/noticias-ciencia/noticias-ciencia.component';
import { RelojDeporComponent } from './components/reloj-depor/reloj-depor.component';
import { RelojCienciaComponent } from './components/reloj-ciencia/reloj-ciencia.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    RelojComponent,
    NoticiasTopComponent,
    NoticiasTechComponent,
    RelojTechComponent,
    CaruselComponent,
    RelojSaluComponent,
    NoticiasDeporComponent,
    NoticiasCienciaComponent,
    RelojDeporComponent,
    RelojCienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
