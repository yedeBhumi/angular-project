import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appUseHostProperty]'
})
export class UseHostPropertyDirective {
   @HostBinding('style.backgroundColor')color!: String;
  constructor() { }
  @HostListener('mouseenter') onmouseover(event: Event){
    this.color = 'purple';

   }
   @HostListener('mouseleave') onmouseleave(event: Event){
      this.color = 'gray';
   }
}
