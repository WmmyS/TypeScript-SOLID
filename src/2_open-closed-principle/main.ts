import { NoDiscount, TenPercentDiscount, FiftyPercentDiscount } from './classes/discount';
import { CartItem } from './classes/interfaces/cart-item';
import { Messeging } from './services/messeging';
import { Order } from './classes/order-status';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';

/**
 * As classes devem ser fechadas para alteração e abertas para implementação.
 */

const noDiscount = new NoDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messeging = new Messeging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messeging, persistency);

const smarthphone: CartItem = new Product('J5 Prime', 1400.45);
const monitor: CartItem = new Product('Acer 22"', 860.5);
const keybord: CartItem = new Product('RedDragon ZX', 340.18);

const cartItems: CartItem[] = [smarthphone, monitor, keybord];

cartItems.forEach((data) => shoppingCart.addItems(data));
console.log(shoppingCart.getItems());
console.log(`R$ ${shoppingCart.totalWithDiscount()}`);
console.log(order.orderstatus);
order.checkout();
console.log(order.orderstatus);
