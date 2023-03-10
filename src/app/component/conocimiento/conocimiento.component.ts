import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conocimiento } from 'src/app/model/conocimiento';
import { ConocimientoService } from 'src/app/service/conocimiento.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-conocimiento',
  templateUrl: './conocimiento.component.html',
  styleUrls: ['./conocimiento.component.css']
})


export class ConocimientoComponent implements OnInit {

  conocimiento: Conocimiento[] = [];

  nombreE: string = '';
  descripcionE: string = '';

  constructor( 
              private sConocimiento: ConocimientoService, 
              private router: Router,  
              private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void{
    this.cargaConocimiento();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  onCreate(): void {
    const expe = new Conocimiento(this.nombreE, this.descripcionE);
    this.sConocimiento.save(expe).subscribe(
      data => {
        alert("añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  cargaConocimiento(): void {
    this.sConocimiento.lista().subscribe(data => { this.conocimiento = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sConocimiento.delete(id).subscribe(
        data => {
          this.cargaConocimiento();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }
}