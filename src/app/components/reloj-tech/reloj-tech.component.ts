import { Component } from '@angular/core';

@Component({
  selector: 'app-reloj-tech',
  templateUrl: './reloj-tech.component.html',
  styleUrl: './reloj-tech.component.css'
})
export class RelojTechComponent {
  mostrarreloj= false;
  ngOnInit(): void {
    // Simulamos una carga de noticias después de 2 segundos
    setTimeout(() => {
      // Aquí cargarías tus noticias
      // Después de cargar las noticias, cambia el valor de mostrarRelojito a false
      // Por ejemplo:
      // this.listNoticias = cargarNoticias(); // Suponiendo que tienes una función cargarNoticias()
      this.mostrarreloj = true;
    }, 2000);
  }


}
