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
      *ngIf="showPropsCounter"
      [count]="primitiveCount" 
      (countChange)="onCountChange($event)">
    </app-primitive-counter>
    <button (click)="showPropsCounter = !showPropsCounter">Toggle</button>
    <hr>
    <app-ngrx-counter *ngIf="showNGRXCounter"></app-ngrx-counter>
    <button (click)="showNGRXCounter = !showNGRXCounter">Toggle</button>
  `
})
export class AppComponent {

  showNGRXCounter: boolean;
  showPropsCounter: boolean;
  primitiveCount: number;

  constructor() {
    this.showPropsCounter = true;
    this.showNGRXCounter = true;
    this.primitiveCount = 0;
  }

  onCountChange(count: number) {
    this.primitiveCount = count;
  }
}