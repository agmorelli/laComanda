import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../servicios/pedido.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  detalles:any;
  idMesa;
  idPedido;

  constructor(private httpPedido: PedidoService) { }

  TraerTiempo()
  {
    this.httpPedido.TiempoRestante(this.idMesa, this.idPedido)
    .then(data=>{
      let respuesta= JSON.parse(data._body);
      this.detalles=respuesta.detalles;
      this.idPedido=respuesta.idPedido;
      console.log(this.detalles);

    })
  }
  

  ngOnInit() {
  }

}
