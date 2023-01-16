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
  otrosConocimientosList:any;
  proyectosList:any;
  futurosProyectosList:any;
  
    constructor(private datosPortafolio:PortafolioService) { }
  
    ngOnInit(): void {
  
      this.datosPortafolio.obtenerDatos().subscribe(data=> {
          console.log(data);
          this.miPortafolio=data;
          this.certificadoList=data.certificados;
          this.otrosConocimientosList=data.otrosConocimientos;
          this.proyectosList=data.proyectos;
          this.futurosProyectosList=data.futurosProyectos;
      });
    }
  }