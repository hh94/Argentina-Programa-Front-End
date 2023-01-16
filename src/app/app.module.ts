import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraHerramientasComponent } from './component/barra-herramientas/barra-herramientas.component';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { CuerpoComponent } from './component/cuerpo/cuerpo.component';
import { PieComponent } from './component/pie/pie.component';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarraHerramientasComponent,
    EncabezadoComponent,
    CuerpoComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


