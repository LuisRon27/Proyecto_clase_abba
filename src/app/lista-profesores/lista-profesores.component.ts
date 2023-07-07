import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { profesor } from '../interfase/profesor';

@Component({
  selector: 'lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {
// creamos una variable que hace referencia a la interfaz creada
  // que es un array que se inicializa vacio
  lista_profesores: profesor[]=[
    {documento:'11111',apellido:'Abba', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'22222',apellido:'Perez', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'33333',apellido:'Rodriguez', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'44444',apellido:'Lucarello', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'55555',apellido:'Antenucci', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'44444',apellido:'Marino', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'77777',apellido:'Bergnano', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'88888',apellido:'Antunez', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'99999',apellido:'Rosso', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'88888',apellido:'Prueba', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'11111',apellido:'Mantelli', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'22222',apellido:'Rossi', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'33333',apellido:'qqqqqqqq', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'44444',apellido:'rrrrr', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'55555',apellido:'yyyyyyyyyy', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'44444',apellido:'tttttt', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'77777',apellido:'uuuuuuuu', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'88888',apellido:'iiiii', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'99999',apellido:'pppppp', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'00000',apellido:'zzzzzz', nombre:'felipe',curso:'',materia:'',año:'2022'},
    {documento:'00000',apellido:'ooooo', nombre:'felipe',curso:'',materia:'',año:'2022'},


 ]
  constructor() { }
  

  ngOnInit(): void {
  
  }

  
}