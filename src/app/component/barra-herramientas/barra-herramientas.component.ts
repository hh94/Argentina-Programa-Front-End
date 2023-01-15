import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-barra-herramientas',
  templateUrl: './barra-herramientas.component.html',
  styleUrls: ['./barra-herramientas.component.css']
})
export class BarraHerramientasComponent implements OnInit {
miPortafolio:any;

  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {

    this.datosPortafolio.obtenerDatos().subscribe(data=> {
        console.log(data);
        this.miPortafolio=data;
    });
  }
}
