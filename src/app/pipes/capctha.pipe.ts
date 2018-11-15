import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capctha'
})
export class CapcthaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? "No soy un robot" : "Error no puede seguir";
    
  }

}
