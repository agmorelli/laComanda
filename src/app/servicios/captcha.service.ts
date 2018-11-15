import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor(private http: MiHttpService) { }

  EnviarCaptcha(obj){
    return this.http.httpPost("Captcha/", {"consulta": obj} ).catch((data)=>{
      return data;
    })
    .catch((data)=>{

      return data;
    })
  }
}
