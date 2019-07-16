import { CartService } from './cart.service';

describe('Cart service tests', () => {
    let service: CartService;

    beforeEach( () => {
        service = new CartService();
    });

    it('Method addToCart should add value in items array', () => {
        service.addToCart('test');
        expect(service.items.includes('test')).toBe(true);
    });

    it('Method getItems should return items array', () => {
        const gettingItems = service.getItems();
        expect(gettingItems).toBe(service.items);
    });

    it('Method clearCart should clear items array', () => {
        service.addToCart('items');
        service.clearCart();
        expect(service.items.length).toBe(0);
    });

    it('Method deleteFromCart should delete item from items array', () => {
        const value = 'sometext';
        service.addToCart(value);
        service.deleteFromCart(value);
        expect(service.items.includes(value)).toBe(false);
    });

});
