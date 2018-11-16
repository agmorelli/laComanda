import { Component, OnInit, Input } from '@angular/core';
import { MesasService } from '../../servicios/mesas.service';
import { AuthService } from '../../servicios/auth/auth.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  listaMesas;
  importe;
  display: boolean = false;
  perfil;

  constructor(private httpMesa: MesasService, private auth: AuthService) {
    this.perfil=this.auth.GetPayLoad().perfil;
    this.TraerLasMesas();
   }

 

  TraerLasMesas()
  {
    this.httpMesa.TraerMesas().subscribe(data=>{
      this.listaMesas= JSON.parse(data._body);
      console.log(this.listaMesas);
  })
  }

  ServirMesa(idMesa)
  {
    this.httpMesa.ServirMesa(idMesa).then((data)=>{
      console.log(data);
      this.TraerLasMesas();
    })
    .catch((data)=>{
      console.log(data);
    });
  }

  Cobrar(idMesa)
  {
    this.httpMesa.CobrarMesa(idMesa).then((data)=>{
      console.log(data);
      this.importe= JSON.parse(data._body).total;
      this.display=true;
      this.TraerLasMesas();
    })
    .catch((data)=>{
      console.log(data);
    });
  }

  Cerrar(idMesa)
  {
    this.httpMesa.CerrarMesa(idMesa).then((data)=>{
      console.log(data);

      this.TraerLasMesas();
    })
    .catch((data)=>{
      console.log(data);
    });
  }


  ngOnInit() {
  }

}
