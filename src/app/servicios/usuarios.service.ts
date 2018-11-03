import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private miHttp: MiHttpService) { }

  TraerHelados():Observable<any>{
    return this.miHttp.httpGet("TraerTodos","").pipe(data=>{return data});
    
  }

  public GuardarHelado(helado) {
   return this.miHttp.httpPost("CargarUno",helado)
   .then((data)=>{return data})
   .catch((data)=>{return data})

 }

 public TraerUnHelado(sabor){
   return this.miHttp.httpGet("TraerUno/"+sabor).pipe(data=>{return data});
 }

 public Borrar(id)
 { 
   return this.miHttp.httpPost("BorrarUno",id)
   .then((data)=>{return data})
   .catch((data)=>{return data})

 }

 public Login(usuario, clave)
 { 
   let datos = {
     "usuario": usuario,
     "clave":clave
   }
   return this.miHttp.httpPost("Sesion/",datos)
   .then((data)=>{return data})
   .catch((data)=>{return data})

 }

}
