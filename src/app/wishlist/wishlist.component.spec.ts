import { WishlistComponent } from './wishlist.component';
import { WishlistService } from '../wishlist.service';

describe('WishlistComponent tests', () => {
    let component: WishlistComponent;
    const service: WishlistService = new WishlistService();

    beforeEach(() => {
        component = new WishlistComponent(service);
    });

    it('Method deleteFromWishlist should remove item from array', () => {
        service.addToWishlist('item');
        component.deleteFromWishlist('item');
        expect(component.wishlist.includes('item')).toBe(false);
    });

    it('Method ClearWishlist should clear wishlist array', () => {
        service.addToWishlist('item');
        service.addToWishlist('item2');
        component.clearWishlist();
        expect(component.wishlist.length).toBe(0);
    });
});
