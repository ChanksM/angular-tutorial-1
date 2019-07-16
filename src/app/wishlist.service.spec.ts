
import { WishlistService } from './wishlist.service';

describe('WishlistService tests', () => {
    let service: WishlistService;
    beforeEach( () => {
        service = new WishlistService();
    });

    it('Method addToWishlist should add value in wishlist array', () => {
        service.addToWishlist('test');
        expect(service.wishlist.includes('test')).toBe(true);
        service.addToWishlist('test');
        expect(service.wishlist.length).toBe(1);
    });

    it('Method getWishlist should return items array', () => {
        const gettingItems = service.getWishlist();
        expect(gettingItems).toBe(service.wishlist);
    });

    it('Method clearCart should clear items array', () => {
        service.addToWishlist('items');
        service.clearWishlist();
        expect(service.wishlist.length).toBe(0);
    });

    it('Method deleteFromCart should delete item from items array', () => {
        const value = 'sometext';
        service.addToWishlist(value);
        service.deleteFromWishlist(value);
        expect(service.wishlist.includes(value)).toBe(false);
    });

});
