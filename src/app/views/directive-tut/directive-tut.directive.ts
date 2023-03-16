import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectiveTut]'
})
export class DirectiveTutDirective  implements OnInit {

  constructor(el:ElementRef) {
    console.log(el.nativeElement.style)
    el.nativeElement.style.color = 'red'
    el.nativeElement.style.background = 'green'
    el.nativeElement.innerHTML = 'SSR'
   }

   ngOnInit(): void {
     
   }

}
