import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'agregaprofe',
  templateUrl: './agregaprofe.component.html',
  styleUrls: ['./agregaprofe.component.css']
})



export class AgregaprofeComponent implements OnInit {
  //AGREGADO para inyectar los servicios que podemos utilizar
  constructor(private Rutanavegacion:Router, private fb: FormBuilder){}
      form!: FormGroup;

  ngOnInit(): void {
    this.form=this.fb.group({
      nombre:'',
      apellido:'',
      curso:'',
      año:'',
      materia:''
    });
  }
    

 

  guardarCambios(){
    this.Rutanavegacion.navigate(['listarprofesores'])
  }    
      
}



  


