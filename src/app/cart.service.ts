import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    constructor() { }
    items = [];

    addToCart(product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    deleteFromCart(productId) {
        this.items.splice(productId, 1);
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
}
