import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  collapsed = true;
  orderFinished = false;

  @ViewChild('productsC')
  productsC: ProductsComponent | undefined;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent | undefined;

  @ViewChild('ordersC')
  ordersC: OrdersComponent | undefined;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    //this.productsC.reset();
    //this.shoppingCartC.reset();
    //this.ordersC.paid = false;
  }

}
