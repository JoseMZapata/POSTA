import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listNoticias: any[] =[];
  loading = false;
  reloj = false;
  mostrarFormulario = true;


  

  constructor(private _noticiasservice: NoticiasService){

  }
  ocultarFormulario() {
    this.mostrarFormulario = false;
  }

  buscarNoticias(parametros: any) {
    this.loading = true;
    this.listNoticias = [];
    this.reloj = true;
    this.reloj = true;

    
    setTimeout(() => {
      this.reloj= true;

    
      this._noticiasservice.getNoticias(parametros).subscribe(data => {
      this.loading = false;
      this.listNoticias = data.articles;

      }, error =>{
        console.log(error);
        this.loading = false;
      })
    }, 2000);


    
    
  }
  
  
  
  
}
