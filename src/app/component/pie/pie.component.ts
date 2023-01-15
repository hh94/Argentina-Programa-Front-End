import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})

export class PieComponent implements OnInit {
  miPortafolio:any;
  
    constructor(private datosPortafolio:PortafolioService) { }
  
    ngOnInit(): void {
  
      this.datosPortafolio.obtenerDatos().subscribe(data=> {
          console.log(data);
          this.miPortafolio=data;
      });
    }
  }