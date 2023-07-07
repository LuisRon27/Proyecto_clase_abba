import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { alumno } from '../interfase/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) { }
  private apiurl = environment.apiurl + 'Alumno';
  
  public obtenertodos(): Observable<alumno[]>{
    return this.http.get<alumno[]>(this.apiurl);
  }

  public buscaalumno(id:number):Observable<any>{
    return this.http.get(this.apiurl +'/BuscaxId/' + id);
  
  }

  

  //this.http.get('https://reqres.in/api/users?page=2')
  //funcion para buscar los datos para modificar
  //public buscaalumno(alumnoid:number):Observable<alumno>{
  //  return this.http.get<alumno>(`${this.apiurl}/${alumnoid}` );
    
  //}

  public crearealumno(alumno: alumno):Observable<alumno>{
    return this.http.post<alumno>(this.apiurl,alumno);
  }



  public editaalumno(alumno:alumno):Observable<any>{
    return this.http.put(this.apiurl+'/'+ alumno.idalumno,alumno);
  }

  public borraalumno(idalumno:number):Observable<any>{
    return this.http.delete<alumno>(this.apiurl+'/Borra/'+ idalumno); 
  }

 
}
