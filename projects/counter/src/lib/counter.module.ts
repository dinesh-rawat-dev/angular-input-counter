import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [CounterComponent]
})
export class AngularCounterModule { }
