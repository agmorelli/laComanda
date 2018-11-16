import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-btn-borrar-usuario',
  templateUrl: './btn-borrar-usuario.component.html',
  styleUrls: ['./btn-borrar-usuario.component.css']
})
export class BtnBorrarUsuarioComponent implements OnInit {


  @Input() id:number;

  @Output() lanzador = new EventEmitter()

  constructor(private httpUsuarios: UsuariosService){
    
  }

  BorrarUsuario(){
    this.httpUsuarios.BorrarUsuario(this.id).then((data)=>{
      this.lanzador.emit();
      
    }).catch((data)=>{
     console.log(data);
   });
  }

  ngOnInit() {
  }

}
