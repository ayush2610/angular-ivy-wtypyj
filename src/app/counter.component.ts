import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter', // custom HTML Tag
  template: `
  <div class="d-flex justify-content-between">
    <button class="btn btn-primary rounded-circle" (click)="decrement()">-</button>
    <div style="display:inline-block">{{count}}</div>
    <button class="btn btn-primary rounded-circle" (click)="increment()">+</button>
  </div>
  `,
})
export class CounterComponent {
  public count = 0; // internal state

  @Input() // parent can supply the data
  public max = 0; // internal state

  increment() {
    if (this.count < this.max) ++this.count;
  }

  decrement() {
    if (this.count > 0) --this.count;
  }
}
