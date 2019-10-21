import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'angular-input-counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() min = 1;
  @Input() max = 10;
  @Input() step = 1;
  @Input() appearance = 'none';
  @Input() color = 'primary';
  @Input() counterValue : number;
  @Input() readonly : boolean;
  @Output() counterChange :  EventEmitter<number>;
  
  ngOnInit() {
    this.counterValue = this.counterValue || this.min;
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
