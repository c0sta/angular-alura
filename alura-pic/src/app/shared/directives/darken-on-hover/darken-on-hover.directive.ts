import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]',
})
export class DarkenOnHoverDirective {
  @Input() brightness: string = '70%';
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseover') // faz com que os métodos abaixo sejam executados de acordo com o evento passado na diretiva @HostListener
  darkenOn() {
    this.render.setStyle(
      this.el.nativeElement,
      'filter',
      `brightness(${this.brightness})`
    );
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
