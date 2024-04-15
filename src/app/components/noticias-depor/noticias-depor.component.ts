import { Component } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias-depor',
  templateUrl: './noticias-depor.component.html',
  styleUrl: './noticias-depor.component.css'
})
export class NoticiasDeporComponent {
  constructor(private _noticiasservice: NoticiasService){}

  depornewsDisplay:any=[];
  mostrarreloj= false;
  loading = true;
  anuncio=false


  

  ngOnInit(): void {
    // Simulamos una carga de noticias después de 2 segundos
    setTimeout(() => {
      this.loading = false;

      this._noticiasservice.deporHeading().subscribe((result)=>{
      console.log(result);
      this.depornewsDisplay=result.articles;
    })

      this.mostrarreloj = true;
      this.anuncio=true;
    }, 2000);
  }

}
