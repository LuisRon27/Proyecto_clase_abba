import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'editaprofesor',
  templateUrl: './editaprofesor.component.html',
  styleUrls: ['./editaprofesor.component.css']
})
export class EditaprofesorComponent implements OnInit {

  constructor(private idRuta: ActivatedRoute) { }

  ngOnInit(): void {
    this.idRuta.params.subscribe(params =>{
      alert(params['id']);
    })
  }

}
