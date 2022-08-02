import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[appDisplayDateTooltip]',
  providers: [MatTooltip]
})
export class DisplayDateTooltipDirective {

  @Input('dateDone')
  dateDone!: string;
  @Input('isDone')
  isDone!: boolean;

  constructor(element: ElementRef, private tooltip: MatTooltip) {
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.tooltip.disabled=!this.isDone;
    this.tooltip.message = this.dateDone;
    this.tooltip.position='left'
    this.tooltip.hideDelay=20;
    this.tooltip.show();
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.tooltip.hide();
   }
}
