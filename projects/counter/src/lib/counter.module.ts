import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {OnlyDigitsDirective} from './counter.directive';

@NgModule({
  declarations: [CounterComponent, OnlyDigitsDirective],
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [CounterComponent]
})
export class AngularCounterModule { }
