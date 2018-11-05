import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuariosService } from "../../servicios/usuarios.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios:Array<Usuario>;

  usuario:string;
  clave:string;
  sexo:string;
  perfil:string;

  constructor(private httpUsuarios:UsuariosService) {
    this.TraerTodosLosUsuarios();
   }

   TraerTodosLosUsuarios()
   {

   this.httpUsuarios.TraerUsuarios().subscribe(data=>{
    this.listaUsuarios= JSON.parse(data._body);
    console.log(this.listaUsuarios);
    
 });
   }

   IngresarUsuario()
   {
     
     this.httpUsuarios.CargarUsuario(this.usuario, this.clave, this.sexo, this.perfil).then((data)=>{
       console.log(data);
       this.TraerTodosLosUsuarios();
     }).catch((data)=>{
      console.log(data);
    });
    
    
   }



  ngOnInit() {
  }

}
