import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'boton-suspender',
  templateUrl: './boton-suspender.component.html',
  styleUrls: ['./boton-suspender.component.css']
})



export class BotonSuspenderComponent implements OnInit {

  @Input() id:number;

  constructor() { }

  Suspender(){
    console.log(this.id);
  }

  ngOnInit() {
  }

}
