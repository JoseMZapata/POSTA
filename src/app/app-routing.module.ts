import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasTopComponent } from './components/noticias-top/noticias-top.component';
import { NoticiasTechComponent } from './components/noticias-salud/noticias-tech.component';
import { NoticiasDeporComponent } from './components/noticias-depor/noticias-depor.component';
import { NoticiasCienciaComponent } from './components/noticias-ciencia/noticias-ciencia.component';

const routes: Routes = [
  { path: ' ', component: NoticiasTopComponent},
  { path: 'salu', component: NoticiasTechComponent},
  { path: 'depor', component: NoticiasDeporComponent},
  { path: 'cien', component: NoticiasCienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
