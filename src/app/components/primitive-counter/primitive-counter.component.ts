import { Component, EventEmitter, Input, Output, OnInit, OnChanges,OnDestroy } from '@angular/core';
import { DisplayValueComponent } from '../display-value/display-value.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primitive-counter',
  standalone: true,
  imports: [CommonModule, DisplayValueComponent],
  template: `
    <h2>Primitive Props Counter</h2>
    <button (click)="decrement()">-</button>
    <span>{{ count }}</span>
    <button (click)="increment()">+</button>
    <app-display-value [value]="count"></app-display-value>
  `,
  styles: [`button { margin: 0 5px; }`]
})
export class PrimitiveCounterComponent implements OnInit, OnChanges, OnDestroy {
  
  ngOnChanges() {
    console.log('PrimitiveCounterComponent count changed:', this.count);
  }

  ngOnInit() {
    console.log('PrimitiveCounterComponent initialized');
  }

  ngOnDestroy() {
    console.log('PrimitiveCounterComponent destroyed');
    this.countChange.emit(0) // Reset count on destroy
  }

  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() { 
    this.countChange.emit(++this.count); 
  }
  decrement() { 
    this.countChange.emit(--this.count); 
  }
}