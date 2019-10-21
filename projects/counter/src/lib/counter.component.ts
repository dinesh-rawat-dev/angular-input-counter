import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'angular-input-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.scss']
})
export class CounterComponent {
  @Input() min = 1;
  @Input() max = 10;
  @Input() step = 1;
  @Input() appearance = 'none';
  @Input() color = 'primary';
  @Input() counterValue : number = 0;
  @Output() counterChange :  EventEmitter<number>;
  constructor(){
    this.counterValue = this.min;
    this.counterChange = new EventEmitter();

  }

  @Input()
  get counter(){
    return this.counterValue;
  }

  increment(){
    if(this.counterValue < this.max) {
      this.counterValue = this.counterValue + this.step;
      this.counterChange.emit(this.counterValue);
    }
  }

  decrement(){
    if(this.counterValue > this.min) {
      this.counterValue = this.counterValue - this.step;
      this.counterChange.emit(this.counterValue);
    }
  }

}
