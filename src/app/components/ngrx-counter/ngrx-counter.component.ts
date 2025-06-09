import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DisplayValueComponent } from '../display-value/display-value.component';
import { CommonModule } from '@angular/common';
import { increment, decrement, reset } from '../../store/counter.actions';
import { CounterState } from '../../store/counter.reducer';
import { Subscription } from 'rxjs';

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
export class NgrxCounterComponent implements OnInit {

  //no onChanges lifecycle hook needed for this component as there are no inputs to track changes

  private store = inject(Store<AppState>);
  count$ = this.store.select(state => state.counter.count);
  private sub?: Subscription;

  ngOnInit() {
    this.sub = this.count$.subscribe(count => {
      console.log('NgrxCounterComponent count changed to:', count);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    console.log('NgrxCounterComponent destroyed');
    this.store.dispatch(reset()); // Reset count on destroy
  }

  increment() { this.store.dispatch(increment()); }
  decrement() { this.store.dispatch(decrement()); }
}