import { Component } from '@angular/core';

@Component({
  selector: 'products',
  template: `
    <div class="row">
      <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12" *ngFor="let product of products">

        <div  class="card mt-3 mb-3">
      
          <div class="card-header">{{product.name}}</div>
          
          <div class="card-body">{{product.price}}</div>
          
          <div class="card-footer">
            <counter [max]="product.max"></counter>
          </div>
      
        </div>
      
      </div>
    </div>
  `,
})
export class ProductsComponent {
  public products = [
    { name: 'Coke', price: 40, max: 50 },
    { name: 'Pepsi', price: 35, max: 10 },
    { name: 'Mirinda', price: 38, max: 5 },
    { name: 'Mirinda', price: 38, max: 5 },
    { name: 'Mirinda', price: 38, max: 5 },
    { name: 'Mirinda', price: 38, max: 5 },
    { name: 'Mirinda', price: 38, max: 5 },
    { name: 'Mirinda', price: 38, max: 5 },
  ];
}
