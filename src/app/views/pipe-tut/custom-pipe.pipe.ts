import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args: number[]): unknown {
    console.log(value)
    console.log(args)
    const [fIndex, sIndex] = args
    return value.substring(fIndex, sIndex+1);
  }

}
