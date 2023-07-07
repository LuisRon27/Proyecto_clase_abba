 import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { alumno } from 'src/app/interfase/alumno';
import { AlumnoService } from 'src/app/servicios/alumno.service';
import {Subscription} from 'rxjs';




@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {
  // creamos una variable que hace referencia a la interfaz creada
  // que es un array que se inicializa vacio
  public lista_alumno: alumno[]=[];
  public sublistalumnos :Subscription | undefined;

  constructor(private alumno : AlumnoService ) { }

  ngOnDestroy(): void {
    this.sublistalumnos?.unsubscribe();
  }
 
  ngOnInit(): void {
    this.obtenertodos()
  }

  obtenertodos(){
     this.sublistalumnos = this.alumno.obtenertodos().subscribe(datos=> {
      this.lista_alumno=datos;
    });
  }

  borraalumno(alumnoI:alumno){
    //let idalumnolocal : number = alumnoI.idalumno;

    this.alumno.borraalumno(alumnoI.idalumno).subscribe(alumno=>this.obtenertodos());
  }

  //<!-- AGREGADO -->
  //Funcion para remover los elementos de la lista
  //remover(indicealumno:number):void{
  //    this.lista_alumno.splice(indicealumno,1);
  //    
  //}

  //mostrarindice(indicealumno:number):void{
  //  alert(indicealumno);
//}
}
