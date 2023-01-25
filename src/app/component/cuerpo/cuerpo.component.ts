import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})

export class CuerpoComponent implements OnInit {
  miPortafolio:any;
  certificadoList:any;
  habilidadesConocimientosList:any;
  proyectosList:any;
  futurosProyectosList:any;
  
    constructor(private datosPortafolio:PortafolioService) { }
  
    ngOnInit(): void {
  
      this.datosPortafolio.obtenerDatos().subscribe(data=> {
          console.log(data);
          this.miPortafolio=data;
          this.certificadoList=data.certificados;
          this.habilidadesConocimientosList=data.habilidadesConocimientos;
          this.proyectosList=data.proyectos;
          this.futurosProyectosList=data.futurosProyectos;
      });
    }
  }