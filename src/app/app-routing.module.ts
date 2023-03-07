import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './component/cuerpo/new-experiencia.component';
import { EditExperienciaComponent } from './component/cuerpo/edit-experiencia.component';
import { BarraHerramientasComponent } from './component/barra-herramientas/barra-herramientas.component';
import { NewProyectoComponent } from './component/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './component/proyectos/edit-proyecto.component';
import { NewConocimientoComponent } from './component/conocimiento/new-conocimiento.component';
import { EditConocimientoComponent } from './component/conocimiento/edit-conocimiento.component';

import { NewSkillComponent } from './component/hys/new-skill.component';
import { EditSkillComponent } from './component/hys/edit-skill.component';
import { EditAcercaDeComponent } from './component/encabezado/edit-acerca-de.component';



const router: Routes = [
  { path:'', component: HomeComponent},
  { path: 'login', component: BarraHerramientasComponent},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  
  { path: 'nuevopro', component: NewProyectoComponent},
  { path: 'editpro/:id', component: EditProyectoComponent},

  { path: 'nuevocono', component: NewConocimientoComponent},
  { path: 'editcono/:id', component: EditConocimientoComponent},
  
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  
  { path: 'edit/:id', component: EditAcercaDeComponent}



];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
