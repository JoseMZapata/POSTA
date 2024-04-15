import { Component } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias-ciencia',
  templateUrl: './noticias-ciencia.component.html',
  styleUrl: './noticias-ciencia.component.css'
})
export class NoticiasCienciaComponent {
  constructor(private _noticiasservice: NoticiasService){}

  ciennewsDisplay:any=[];
  mostrarreloj= false;
  loading = true;
  anuncio=false


  

  ngOnInit(): void {
    // Simulamos una carga de noticias después de 2 segundos
    setTimeout(() => {
      this.loading = false;

      this._noticiasservice.cienHeading().subscribe((result)=>{
      console.log(result);
      this.ciennewsDisplay=result.articles;
    })

      this.mostrarreloj = true;
      this.anuncio=true;
    }, 2000);
  }

}
