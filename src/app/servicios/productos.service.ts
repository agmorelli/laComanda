import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: MiHttpService) { }

  TraerProductos():Observable<any>{
    return this.http.httpGet("Productos/TraerTodos").pipe(data=>{return data});
    
  }
}


