import { Component } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias-tech',
  templateUrl: './noticias-tech.component.html',
  styleUrl: './noticias-tech.component.css'
})
export class NoticiasTechComponent {
  constructor(private _noticiasservice: NoticiasService){}

  salunewsDisplay:any=[];
  mostrarreloj= false;
  loading = true;
  anuncio=false


  

  ngOnInit(): void {
    // Simulamos una carga de noticias después de 2 segundos
    setTimeout(() => {
      this.loading = false;

      this._noticiasservice.saludHeading().subscribe((result)=>{
      console.log(result);
      this.salunewsDisplay=result.articles;
    })

      this.mostrarreloj = true;
      this.anuncio=true;
    }, 2000);
  }
  

}
