import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraHerramientasComponent } from './component/barra-herramientas/barra-herramientas.component';
import { CuerpoComponent } from './component/cuerpo/cuerpo.component';
import { PieComponent } from './component/pie/pie.component';

import { HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './component/home/home.component';


import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './component/cuerpo/new-experiencia.component';
import { EditExperienciaComponent } from './component/cuerpo/edit-experiencia.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { NewProyectoComponent } from './component/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './component/proyectos/edit-proyecto.component';
import { ConocimientoComponent } from './component/conocimiento/conocimiento.component';
import { NewConocimientoComponent } from './component/conocimiento/new-conocimiento.component';
import { EditConocimientoComponent } from './component/conocimiento/edit-conocimiento.component';
import { HysComponent } from './component/hys/hys.component';
import { EditSkillComponent } from './component/hys/edit-skill.component';
import { NewSkillComponent } from './component/hys/new-skill.component';



// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { EditAcercaDeComponent } from './component/encabezado/edit-acerca-de.component';



@NgModule({
  declarations: [
    AppComponent,
    BarraHerramientasComponent,
    EncabezadoComponent,
    CuerpoComponent,
    PieComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    ProyectosComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    ConocimientoComponent,
    NewConocimientoComponent,
    EditConocimientoComponent,
    HysComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


       // Specify ng-circle-progress as an import
       NgCircleProgressModule.forRoot({
        // set defaults here
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: "#78C000",
        innerStrokeColor: "#C7E596",
        animationDuration: 300,
        })
      

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]


})
export class AppModule { }


