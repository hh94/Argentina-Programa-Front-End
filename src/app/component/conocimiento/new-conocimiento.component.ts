import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conocimiento } from 'src/app/model/conocimiento';
import { ConocimientoService } from 'src/app/service/conocimiento.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-conocimiento',
  templateUrl: './new-conocimiento.component.html',
  styleUrls: ['./new-conocimiento.component.css']
})
export class NewConocimientoComponent implements OnInit {


  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sConocimiento: ConocimientoService, private router: Router) { }

  ngOnInit(): void {
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

}