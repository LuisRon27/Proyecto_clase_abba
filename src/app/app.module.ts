import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// PARA LA UTILIZACION DE FORMULARIOS REACTIVOS
// esto lo importa automaticamente
import { ReactiveFormsModule } from '@angular/forms';
//Lo Genera el Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

// Generacion de componentes
import { AppComponent } from './app.component';
import { BarraDeNavegacionComponent } from './componentes/barra-de-navegacion/barra-de-navegacion.component';
import { AgregoModificoComponent } from './componentes/agrego-modifico/agrego-modifico.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { ConsultarComponent } from './componentes/consultar/consultar.component';
//para la importacion del modulo generado
import { MaterialModule} from './material/material.module';
import { ListaProfesoresComponent } from './lista-profesores/lista-profesores.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { AgregaprofeComponent } from './componentes/agregaprofe/agregaprofe.component';

import { ConsultarprofeComponent } from './consultarprofe/consultarprofe.component';
import { EditaprofesorComponent } from './profesores/editaprofesor/editaprofesor.component';
import { PepeComponent } from './pepe/pepe.component';
import { AlumnoService } from './servicios/alumno.service';
import { EditoComponent } from './edito/edito/edito.component';


@NgModule({
  declarations: [
    AppComponent,
    
    BarraDeNavegacionComponent,
    AgregoModificoComponent,
    ListaAlumnosComponent,
    ConsultarComponent,
    ListaProfesoresComponent,
    PaginaInicioComponent,
    AgregaprofeComponent,
    ConsultarprofeComponent,
    EditaprofesorComponent,
    PepeComponent,
    EditoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PARA LA UTILIZACION DE FORMULARIOS REACTIVOS
    ReactiveFormsModule,
    // esto lo instala el Angular Material
    BrowserAnimationsModule,
    //para la importacion del modulo generado para Material
    MaterialModule,
    HttpClientModule
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
