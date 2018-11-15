import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class CocinaService {

  constructor(private http: MiHttpService) { }

  TraerTodosLosPedidos():Observable<any>
  {
    return this.http.httpGet("Pedido/TraerTodos").pipe(data=>{return data});
  }

  IngresarPedido()
  {
    /*
    let datos={
      "idMesa":,

    }

    return this.http.httpPost("Pedidos/",datos)
    .then((data)=>{return data})
    .catch((data)=>{return data})*/
  }
}
