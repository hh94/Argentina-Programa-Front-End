import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conocimiento } from 'src/app/model/conocimiento';
import { ConocimientoService } from 'src/app/service/conocimiento.service';

@Component({
  selector: 'app-edit-conocimiento',
  templateUrl: './edit-conocimiento.component.html',
  styleUrls: ['./edit-conocimiento.component.css']
})

export class EditConocimientoComponent implements OnInit {

  
  conocimiento : Conocimiento = null;

  constructor(private sConocimiento: ConocimientoService , private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sConocimiento.detail(id).subscribe(
      data =>{
        this.conocimiento = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sConocimiento.update(id, this.conocimiento).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}