import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'farhCelConv'
})
export class FarhCelConvPipe implements PipeTransform {

  transform(value: number, ...args: any[]): unknown {
    let [type] = args;
    type = type.toLowerCase()
    console.log(type)
    if (type === 'f'){
      return (( value * 9/5 ) + 32);
    } else {
      return ((value-32)*5)/9;
    }
  }

}
