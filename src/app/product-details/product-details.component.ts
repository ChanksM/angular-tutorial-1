import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from './../products';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
    product;
    wishlist = [];

    constructor(private route: ActivatedRoute, private cartService: CartService,
                private wishlistService: WishlistService) {
                    this.wishlist = wishlistService.getWishlist();
                }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.product = products[+params.get('productId')];
        });
    }

    addToCart(product) {
        window.alert('Your product has been added!');
        this.cartService.addToCart(product);
    }

    addToWishlist(product) {
        window.alert('Your product has been added to wishlist!');
        this.wishlistService.addToWishlist(product);
    }

    deleteFromWishlist(productId) {
        window.alert('Your product has been deleted from wishlist!');
        this.wishlistService.deleteFromWishlist(productId);
    }

    ifExist(product) {
        return this.wishlist.includes(product);
    }
}
