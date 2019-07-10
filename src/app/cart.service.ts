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

    deleteFromCart(product) {
        const index = this.items.indexOf(product);
        this.items.splice(index, 1);
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
}
