import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../servicios/pedido.service';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent implements OnInit {

  listaPendientes: any;
  constructor(private httpServicio: PedidoService) {
    this.httpServicio.TraerPedidosPorSector().then(data=>{
      this.listaPendientes=data;
      console.log(data);
    })
    .catch(data=>{console.log(data)})
   }

  ngOnInit() {
  }

}
