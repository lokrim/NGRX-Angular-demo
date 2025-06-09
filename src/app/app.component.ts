import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimitiveCounterComponent } from './components/primitive-counter/primitive-counter.component';
import { NgrxCounterComponent } from './components/ngrx-counter/ngrx-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PrimitiveCounterComponent, NgrxCounterComponent],
  template: `
    <h1>State Management Comparison</h1>
    <app-primitive-counter 
      [count]="primitiveCount" 
      (countChange)="onCountChange($event)">
    </app-primitive-counter>
    <hr>
    <app-ngrx-counter></app-ngrx-counter>
  `
})
export class AppComponent {
  primitiveCount = 0;
  onCountChange(count: number) {
    this.primitiveCount = count;
  }
}