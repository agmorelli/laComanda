import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../servicios/pedido.service';

@Component({
  selector: 'app-tabla-pendientes',
  templateUrl: './tabla-pendientes.component.html',
  styleUrls: ['./tabla-pendientes.component.css']
})
export class TablaPendientesComponent implements OnInit {
  spinner:boolean;
  listaPendientes: Array<any>;
  tiempoPreparacion:number;
  constructor(private httpServicio: PedidoService) {

    this.TraerTabla();

   }

   TraerTabla()
   {
     this.spinner=true;
    this.httpServicio.TraerPedidosPorSector().then(data=>{
      this.listaPendientes= JSON.parse(data._body);
      this.spinner=false;
      
    })
    .catch(data=>{
      this.spinner=false;
      console.log(data._body)})
   }
  ngOnInit() {
    this.TraerTabla();
  }

}
