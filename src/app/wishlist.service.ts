import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class WishlistService {
    constructor() { }
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
