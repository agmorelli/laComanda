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
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private builder: FormBuilder, private usrService: UsuariosService, private router: Router) { }

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

  sexo = new FormControl('', [
    Validators.required
  ]);







  registroForm: FormGroup = this.builder.group({
    email: this.email,
    clave: this.clave,
    copiaClave: this.copiaClave,
    sexo: this.sexo,
   

  });

  ngOnInit() {
  }

  Registrarse()
  {
    console.log("registro");
  }

}
