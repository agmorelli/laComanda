import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {
  api:string="http://localhost:8080/TP_PROG3_1C_2018/backend/";
 // api:string= "https://amorelli.000webhostapp.com/laComanda/backend/";

  constructor(private http:Http) { }

  public httpGet(metodo:string, objeto?:any):Observable<any>{

    
    return this.http
    .get(this.api + metodo)
    .pipe(tap(data => {return this.extraerDatos(data)}));
    
  }

  public httpPost(metodo:string, objeto:any)
  {
    return this.http.post(this.api + metodo,objeto)
    .toPromise()
    .then((data)=>{return data})
    .catch((data)=>{console.log(data)})
   // .pipe(catchError(this.handleError));

  }

  private extraerDatos(resp:Response) {

    return resp.json() || {};

}
private handleError(error:Response | any):Observable<any>{

    return error;
}

}
