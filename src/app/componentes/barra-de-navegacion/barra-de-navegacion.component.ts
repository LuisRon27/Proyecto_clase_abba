import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.css']
})
export class BarraDeNavegacionComponent implements OnInit {
  imagen ='./assets/descarga.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
