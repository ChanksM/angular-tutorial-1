import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})

export class CartService {
    constructor(private http: HttpClient) { }
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

    getShippingCosts() {
        return this.http.get('/assets/shipping.json');
    }
}
