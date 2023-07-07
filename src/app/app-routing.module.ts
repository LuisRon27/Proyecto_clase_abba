import { NgModule } from "@angular/core";
import { RouterLinkActive, RouterModule, Routes } from "@angular/router";
import { AgregaprofeComponent } from "./componentes/agregaprofe/agregaprofe.component";
import { AgregoModificoComponent } from "./componentes/agrego-modifico/agrego-modifico.component";
import { BarraDeNavegacionComponent } from "./componentes/barra-de-navegacion/barra-de-navegacion.component";
import { ConsultarComponent } from "./componentes/consultar/consultar.component";
import { ListaAlumnosComponent } from "./componentes/lista-alumnos/lista-alumnos.component";
import { ConsultarprofeComponent } from "./consultarprofe/consultarprofe.component";
import { EditoComponent } from "./edito/edito/edito.component";
import { ListaProfesoresComponent } from "./lista-profesores/lista-profesores.component";
import { PaginaInicioComponent } from "./pagina-inicio/pagina-inicio.component";
import { EditaprofesorComponent } from "./profesores/editaprofesor/editaprofesor.component";


const routes:Routes = [
    // se agregan los componentes que queremos que hagan acciones segun lo que llamemos
    // {path:'',component : ListaAlumnosComponent},
    //<!-- AGREGADO -->
    {path:'',component : PaginaInicioComponent},
    {path:'listar',component : ListaAlumnosComponent},
    {path:'listarprofesores',component : ListaProfesoresComponent},
    {path:'agregar',component : AgregoModificoComponent},
    {path:'agregarprofe',component : AgregaprofeComponent},
    //AGREGADO para la edicion de profesor
    {path:'editarprofe/:id',component : EditaprofesorComponent},
    {path:'editaralumno/:id',component : AgregoModificoComponent},
    // {path:'ver/:id',component : ConsultarComponent},
    // {path:'verprofe/:id',component : ConsultarprofeComponent},
    // para el caso que no coincida con nada de las opciones anteriores se agrega esta RouterLinkActive
    // siempre debe ser la ultima ruta a colocar
    //AGREGADO para controlar los errores
    {path:'**',component : PaginaInicioComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
