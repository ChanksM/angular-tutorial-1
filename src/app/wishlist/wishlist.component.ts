import { WishlistService } from '../wishlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss']
})

export class WishlistComponent implements OnInit {
    wishlist;
    constructor(private wishlistService: WishlistService) {
        this.wishlist = this.wishlistService.getWishlist();
    }

    ngOnInit() { }

    deleteFromWishlist(productId) {
        this.wishlistService.deleteFromWishlist(productId);
    }

    clearWishlist() {
        this.wishlistService.clearWishlist();
        this.wishlist = this.wishlistService.getWishlist();
    }
}
