import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { alumno } from 'src/app/interfase/alumno';
import { AlumnoService } from 'src/app/servicios/alumno.service';

@Component({
  selector: 'app-edito',
  templateUrl: './edito.component.html',
  styleUrls: ['./edito.component.css']
})
export class EditoComponent implements OnInit {
  edita : boolean = false;
  // creo la variable para manejar el ID
  Idalumno : number = 0;

   //defino la variable como grupo de formulario
   editaralumno: FormGroup;
  //defino la variable como grupo de formulario
  public alumnoxid: alumno[]=[];

 //inyectamos el formbuilder para poder utilizarlo
  constructor(private router:Router,
              private activatedroute : ActivatedRoute , private alumno:AlumnoService, private fb: FormBuilder ,) { 
                 //la llenamos para que contenga todo lo que esta en el formulario 
    this.editaralumno = this.fb.group({
      //documento: ['', Validators.required],
      apellido: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion : ['', Validators.required],
      telefono : ['', Validators.required],
    });
  
  }

  ngOnInit(): void {
          // //se va a ejecutar al inicio 
          // this.getbyid();
  }

  public editar(){

  }
  // datosformulario(alumno: ){
  //   this.editaralumno.patchValue({
  //     apellido: alumno.apellido,
  //     nombre: alumno.nombre,
  //     direccion : alumno.direccion,
  //     telefono : alumno.telefono,
  //   });
  // }

  // public getbyid(){
  //   this.Idalumno = Number(this.activatedroute.snapshot.paramMap.get('id'));
  //   this.alumno.getbyid(this.Idalumno).subscribe(datos=>{
  //     this.editaralumno=datos;
    
    // });
   
}
