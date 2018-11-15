import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';


function copiaClave(input: FormControl) {

      if (input.root.get('clave') == null) {
        return null;
      }

      const verificar = input.root.get('clave').value === input.value;
      return verificar ? null : { mismaClave : true };
  }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private builder: FormBuilder, private usrService: UsuariosService, private router: Router ) { }

  email = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  
  clave = new FormControl('', [
    Validators.required
  ]);
  
  copiaClave = new FormControl('', [
    Validators.required,
    copiaClave
  ]);

  registroForm: FormGroup = this.builder.group({
    email: this.email,
    clave: this.clave,
    //copiaClave: this.copiaClave,
    
  });

  ngOnInit() {
  }

  Ingresar()
  {
 
    let usuario= this.registroForm.get('email').value;
    let clave= this.registroForm.get('clave').value;

    this.usrService.Login(usuario, clave)
    .then(
      (data)=>{

        console.log(JSON.parse(data._body));

        let token =  JSON.parse(data._body).token;

        if(token)
        {
          localStorage.setItem("token",token);
          this.router.navigateByUrl("")
        }else{
          alert("error");
        }

       
    })
    .catch((data)=>{console.log(data)});
  }

  Registro()
  {
    this.router.navigate(['registro']);
  }

  IngresoRapido(usr:string){
    this.email.setValue(usr+"@gmail.com");
    if(usr=="admin")
    {
      this.clave.setValue("admin");
    }
    else{
      this.clave.setValue("1234");
    }
    this.Ingresar();
  }




}
