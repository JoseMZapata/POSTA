import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
@Component({
  selector: 'app-noticias-top',
  templateUrl: './noticias-top.component.html',
  styleUrl: './noticias-top.component.css'
})
export class NoticiasTopComponent implements OnInit {


  constructor(private _noticiasservice: NoticiasService){}

  topheadDisplay:any=[];
  mostrarreloj= false;
  loading = true;
  anuncio=false


  

  ngOnInit(): void {
    // Simulamos una carga de noticias después de 2 segundos
    setTimeout(() => {
      this.loading = false;

      this._noticiasservice.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadDisplay=result.articles;
    })

      this.mostrarreloj = true;
      this.anuncio=true;
    }, 2000);
  }
  




}
