import { Directive, ElementRef, HostListener, HostBinding ,Input} from '@angular/core';

@Directive({
  selector: '[appHostlistener]'
})
export class HostlistenerDirective {
  @HostBinding('style.backgroundColor') color1:string;
  @Input() borderColor: string='green';
  @Input() borderWidth: number=1;
  constructor(private ele: ElementRef ) {
    
   }

  @HostListener('mouseenter') onmouseover(event :Event){
    this.ele.nativeElement.style.color = 'red';

    this.ele.nativeElement.style.backgroundColor = null
    this.ele.nativeElement.style.border = null 
  }

  @HostListener('mouseleave') onmouseleave(event:Event){
   // this.ele.nativeElement.style.backgroundColor = 'yellow'
   console.log(this.color1)
    this.color1 = 'yellow'
    this.ele.nativeElement.style.border = `${this.borderWidth}px dashed ${this.borderColor}` 
  }
}
