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
import { EditExperienciaComponent } from './component/cuerpo/edit-experiencia.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { EditProyectoComponent } from './component/proyectos/edit-proyecto.component';
import { ConocimientoComponent } from './component/conocimiento/conocimiento.component';
import { EditConocimientoComponent } from './component/conocimiento/edit-conocimiento.component';
import { EditSkillComponent } from './component/hys/edit-skill.component';
import { HysComponent } from './component/hys/hys.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';



@NgModule({
  declarations: [
    AppComponent,
    BarraHerramientasComponent,
    EncabezadoComponent,
    CuerpoComponent,
    PieComponent,
    HomeComponent,
    EditExperienciaComponent,
    ProyectosComponent,
    EditProyectoComponent,
    ConocimientoComponent,
    EditConocimientoComponent,
    EditSkillComponent,
    HysComponent
    
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
        }),
 //        provideFirebaseApp(() => initializeApp(environment.firebase)),
  //       provideStorage(() => getStorage())
      

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]


})
export class AppModule { }


