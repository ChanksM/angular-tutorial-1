import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class WishlistService {
    constructor(private http: HttpClient) { }
    wishlist = [];

    addToWishlist(product) {
        if (!this.wishlist.includes(product)) {
            this.wishlist.push(product);
        } else {
            return false;
        }
    }

    getWishlist() {
        return this.wishlist;
    }

    deleteFromWishlist(product) {
        const index = this.wishlist.indexOf(product);
        this.wishlist.splice(index, 1);
    }

    clearWishlist() {
        this.wishlist = [];
        return this.wishlist;
    }
}
