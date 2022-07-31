import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

const shoppingCart = new ShoppingCart();

const smarthphone: CartItem = { name: 'J5 Prime', price: 1400.45 };
const monitor: CartItem = { name: 'Acer 22"', price: 860.5 };
const keybord: CartItem = { name: 'RedDragon ZX', price: 340.18 };

const cartItems: CartItem[] = [smarthphone, monitor, keybord];

cartItems.forEach((data) => shoppingCart.addItems(data));
console.log(shoppingCart.getItems());
console.log(`R$ ${shoppingCart.total()}`);
shoppingCart.checkout();
