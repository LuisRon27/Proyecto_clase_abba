import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
//se importo automaticamente cuando hacemos referencia a la interfase para pasar al backend
import { alumno } from 'src/app/interfase/alumno';
import { AlumnoService } from 'src/app/servicios/alumno.service';


@Component({
  selector: 'agrego-modifico',
  templateUrl: './agrego-modifico.component.html',
  styleUrls: ['./agrego-modifico.component.css']
})


export class AgregoModificoComponent implements OnInit {
  //defino la variable para saber si es edicion o es insert
  edita : boolean = false;
  // creo la variable para manejar el ID
  Idalumno : number = 0;
  //defino la variable como grupo de formulario
  agregaralumno: FormGroup;

 //inyectamos el formbuilder para poder utilizarlo
  constructor(private router:Router,
              private activatedroute : ActivatedRoute , //agregamos esta inyeccion para poder acceder a la ruta activa
              private fb: FormBuilder ,
              private alumno:AlumnoService) { 
    //la llenamos para que contenga todo lo que esta en el formulario 
    this.agregaralumno = this.fb.group({
      //documento: ['', Validators.required],
      apellido: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion : ['', Validators.required],
      telefono : ['', Validators.required],
      //observaciones : [''],
    });
  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
    if (params["id"]== undefined){
      return;
    }

    this.edita= true;
    //asigno la variable para la busqueda
    this.Idalumno=params["id"];
    //traemos los datos del alumno usando el servicio
    this.alumno.buscaalumno(this.Idalumno).subscribe(alumnoWS => this.datosformulario(alumnoWS));
    
  })
  }

  datosformulario(alumno:alumno){
    this.agregaralumno.patchValue({
      apellido: alumno.apellido,
      nombre: alumno.nombre,
      direccion : alumno.direccion,
      telefono : alumno.telefono,
    });
  }
  
  agregar(){
    let alumno: alumno= Object.assign({},this.agregaralumno.value);
    //para controlar si venimos de la edicion o del agregar alumno
    if (this.edita) {
      //codigo de la edicion de registro
      alumno.idalumno=this.Idalumno;
      this.alumno.editaalumno(alumno).subscribe(alumno=> this.grabobien());
    }else {
      //codigo para el agregado de reegistro
        this.alumno.crearealumno(alumno).subscribe(alumno=> this.grabobien());
  }
    }

    grabobien(){
      this.router.navigate(["/listar"])
    }

   
      
    

  }




    //para que podamos controlar si los datos estan correctos
    // los enviamos a la consola para mostrarlos
    //console.log(this.agregaralumno);
      //const datosalumno : alumno ={
      //documento: this.agregaralumno.get('documento')?.value,
      //numero:this.agregaralumno.get('numero')?.value,
      //apellido: this.agregaralumno.get('apellido')?.value,
      //nombre: this.agregaralumno.get('nombre')?.value,
      //direccion: this.agregaralumno.get('direccion')?.value,
      //telefono: this.agregaralumno.get('telefono')?.value,
      //observaciones: this.agregaralumno.get('observaciones')?.value,
      //estado: this.agregaralumno.get('estado')?.value,
    //}
    //this.guardaalumno;
  

  //guardaalumno(alumno:alumno){
  //  this.alumno.crearealumno(alumno).subscribe(()=>{
      //this.router.navigate(['/lista-alumnos'])
    //})
  //}
 


