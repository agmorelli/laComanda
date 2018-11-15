import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Observable } from 'rxjs';
import { Pedido } from '../clases/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  token;
  constructor(private http: MiHttpService) {
    this.token= localStorage.getItem('token');
   }

  TraerTodosLosPedidos():Observable<any>
  {
    return this.http.httpGet("Pedidos/TraerTodos").pipe(data=>{return data});
  }


  TraerPedidosPorSector()
  {
    
    return this.http.httpPost("Pedidos/PendientesEmpleado",{"token":localStorage.getItem('token')})
    .then((data)=>{return data})
    .catch((data)=>{return data})
  }

  IngresarPedido(pedido: Pedido)
  {
    

    return this.http.httpPost("Pedidos/",pedido)
    .then((data)=>{return data})
    .catch((data)=>{return data})
  }

  PrepararPedido(idDetalle, tPrepacion)
  {
    let datos={
      "idDetalle": idDetalle,
      "tiempoPreparacion": tPrepacion,
      "token": localStorage.getItem('token')
    }

    return this.http.httpPost("Pedidos/PrepararPedido",datos)
    .then((data)=>{return data})
    .catch((data)=>{return data})
  }

  TiempoRestante(idMesa, idPedido)
  {

    return this.http.httpPost("Pedidos/TiempoRestante",{"idMesa": idMesa, "idPedido": idPedido })
    .then((data)=>{return data})
    .catch((data)=>{return data})
  }

  ServirPedido(idDetalle){
    return this.http.httpPost("Pedidos/ServirPedido",{"idDetalle": idDetalle })
    .then((data)=>{return data})
    .catch((data)=>{return data})

  }
  


}
