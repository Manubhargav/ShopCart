/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})

export class highlightDirective {
  constructor(private el: ElementRef) { }
  @Input('myHighlight') highlightColor: string;
  @Input() defaultColor:string;
 

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor||this.defaultColor|| 'cyan');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
 
    
};