# Angular Input Counter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.


![Angular Input Counter](https://github.com/dinesh-rawat/angular-input-counter/raw/master/AngularCounter.png)

## How to use?

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularCounterModule } from 'angular-input-counter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularCounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## How to use in template?

```
<angular-input-counter 
        [min]="5"  
        [max]="20"   
        [step]="1"  
        [readonly]="true"  
        [(counterValue)]="counterValue" 
        [color]="'primary'"></angular-input-counter>
```

### APIs


| Field      | Default Value | Mandatory    |
|------------|-------------|-------------|
| min | 1 | N |
| max | 10 | N |
| step | 1 | N |
| counterValue | - | Two way binding |
| color | primary | N |
| readonly | F | N |

