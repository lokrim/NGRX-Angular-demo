import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { DisplayValueComponent } from '../display-value/display-value.component';
import { CommonModule } from '@angular/common';
import { increment, decrement } from '../../store/counter.actions';
import { CounterState } from '../../store/counter.reducer';

interface AppState {
  counter: CounterState;
}

@Component({
  selector: 'app-ngrx-counter',
  standalone: true,
  imports: [CommonModule, DisplayValueComponent],
  template: `
    <h2>NgRx Counter</h2>
    <button (click)="decrement()">-</button>
    <span>{{ count$ | async }}</span>
    <button (click)="increment()">+</button>
    <app-display-value [value]="count$ | async"></app-display-value>
  `,
  styles: [`button { margin: 0 5px; }`]
})
export class NgrxCounterComponent {
  private store = inject(Store<AppState>);
  count$ = this.store.select(state => state.counter.count);

  increment() { this.store.dispatch(increment()); }
  decrement() { this.store.dispatch(decrement()); }
}