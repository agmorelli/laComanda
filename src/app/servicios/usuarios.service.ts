import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
token=localStorage.getItem("token");
  constructor(private miHttp: MiHttpService) { }
/*
  TraerUsuarios(){
    let datos={
      "token":this.token
    }
    return this.miHttp.httpPost("Usuarios/ListaUsuarios",datos)
    .then((data)=>{return data})
    .catch((data)=>{return data})
    
  }
*/
  TraerUsuarios():Observable<any>{
    return this.miHttp.httpGet("Usuarios/ListaUsuarios").pipe(data=>{return data});
    
  }

  public GuardarHelado(helado) {
   return this.miHttp.httpPost("CargarUno",helado)
   .then((data)=>{return data})
   .catch((data)=>{return data})

 }

 public TraerUnUsuario(id){
   return this.miHttp.httpGet("TraerUno/"+id).pipe(data=>{return data});
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

public CerrarSesion()
{ 
   let datos = {
     "token": localStorage.getItem('token')
   }
   return this.miHttp.httpPost("Sesion/Salir",datos)
   .then((data)=>{return data})
   .catch((data)=>{return data})

}

public CargarUsuario(usuario, clave, sexo, perfil?)
{ 

    let datos;
    let token= localStorage.getItem('token');
  if(perfil)
  {
    datos = {
      "usuario": usuario,
      "clave":clave,
      "sexo": sexo,
      "perfil":perfil,
      "token": token
    }

  }
  else
  {
    datos = {
      "usuario": usuario,
      "clave":clave,
      "sexo": sexo,
      "perfil": "Cliente",
      "token": token
    }
  }
  console.log(datos);


  return this.miHttp.httpPost("Usuarios/Carga",datos)
  .then((data)=>{return data})
  .catch((data)=>{return data})

}

}
