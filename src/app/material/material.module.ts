import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importamos el modulo de toolbar desde Material
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button'
//AGREGADO
// para manejar los formularios y los inputs
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatInputModule} from '@angular/material/input'


@NgModule({
  declarations: [],
  //para exportar todos los modulos importados
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    //AGREGADO
    MatFormFieldModule,
    MatInputModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
