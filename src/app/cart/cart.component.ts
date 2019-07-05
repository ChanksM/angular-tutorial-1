import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
    items;
    constructor(private cartService: CartService) {
        this.items = this.cartService.getItems();
    }

    ngOnInit() { }

    deleteFromCart(productId) {
        this.cartService.deleteFromCart(productId);
    }

    clearCart() {
        this.cartService.clearCart();
        this.items = this.cartService.getItems();
    }
}
