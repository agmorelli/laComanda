import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuardService } from '../../servicios/auth/auth-guard.service';
import { AuthService } from '../../servicios/auth/auth.service';
import { UsuariosService } from '../../servicios/usuarios.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  info= this.auth.GetPayLoad();
  usuario:string = this.info.usuario;
  perfil:string= this.info.perfil;

  constructor(private router: Router, private auth: AuthService, private httpUsuario: UsuariosService) {
    console.log(this.info.perfil);


    switch(this.perfil){

      case "mozo": this.router.navigate(['mozo']);
      break;

      case "admin": this.router.navigate(['admin']);
      break;

      case "cocinero": this.router.navigate(['cocina']);
      break;

      case "cocinero": this.router.navigate(['chopera']);
      break;

      case "cocinero": this.router.navigate(['tragos']);
      break;

      case "cocinero": this.router.navigate(['candy']);
      break;

      case "cocinero": this.router.navigate(['cliente']);
      break;
    }
   }

   Salir()
   {
     this.httpUsuario.CerrarSesion().then((data)=>{
       console.log(data);
       localStorage.removeItem("token");
       this.router.navigate(['login']);
     }).catch((data)=>{
       console.log(data);
     })

   }



  ngOnInit() {
  }

}
