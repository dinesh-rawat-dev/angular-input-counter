 import {Directive, ElementRef, HostListener, Output, EventEmitter} from '@angular/core';

//only-digits
@Directive({
  selector: '[only-digits]'
})
export class OnlyDigitsDirective {

  constructor(public el: ElementRef) {

    this.el.nativeElement.onkeypress = (evt) => {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    };

  }
}