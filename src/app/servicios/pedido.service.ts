import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Observable } from 'rxjs';
import { Pedido } from '../clases/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: MiHttpService) { }

  TraerTodosLosPedidos():Observable<any>
  {
    return this.http.httpGet("Pedido/TraerTodos").pipe(data=>{return data});
  }

  IngresarPedido(pedido: Pedido)
  {
    let datos={
      "idMesa":pedido.idMesa,

    }

    return this.http.httpPost("Pedidos/",datos)
    .then((data)=>{return data})
    .catch((data)=>{return data})
  }


}
