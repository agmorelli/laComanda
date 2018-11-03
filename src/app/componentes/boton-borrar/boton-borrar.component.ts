import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../clases/producto';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {

  @Input() producto:Producto;
  @Output() enviarABorrar = new EventEmitter();

  constructor() { }

  Borrar()
  {
    console.log("se Borro el producto: " + this.producto.nombre);
    this.enviarABorrar.emit(this.producto);
    
  }

  ngOnInit() {
  }

}
