import { NgModule } from "@angular/core";
import { RouterLinkActive, RouterModule, Routes } from "@angular/router";
import { AgregoModificoComponent } from "./componentes/agrego-modifico/agrego-modifico.component";
import { ListaAlumnosComponent } from "./componentes/lista-alumnos/lista-alumnos.component";

const routes:Routes = [
    // se agregan los componentes que queremos que hagan acciones segun lo que llamemos
    {path:'',component : ListaAlumnosComponent},
    {path:'agregar',component : AgregoModificoComponent},
    {path:'',component : ListaAlumnosComponent},
    // para el caso que no coincida con nada de las opciones anteriores se agrega esta RouterLinkActive
    {path:'**',redirectTo : '',pathMatch:'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
