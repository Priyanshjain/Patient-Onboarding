import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {
  constructor(
    private renderer: Renderer2, 
    private elmRef: ElementRef
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.elmRef.nativeElement, "display", "none");
  }
}
