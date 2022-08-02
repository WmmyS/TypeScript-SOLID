import { CartItem } from './entities/interfaces/cart-item';
import { Messeging } from './services/messeging';
import { Order } from './entities/order-status';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

/**
 * Cada classe ou objeto deve ter responsabilidade única, evitando classes que fazem
 * várias coisas fora de seua responsabilidade, ou seja, God class.
 */

const shoppingCart = new ShoppingCart();
const messeging = new Messeging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messeging, persistency);

const smarthphone: CartItem = new Product('J5 Prime', 1400.45);
const monitor: CartItem = new Product('Acer 22"', 860.5);
const keybord: CartItem = new Product('RedDragon ZX', 340.18);

const cartItems: CartItem[] = [smarthphone, monitor, keybord];

cartItems.forEach((data) => shoppingCart.addItems(data));
console.log(shoppingCart.getItems());
console.log(`R$ ${shoppingCart.total()}`);
console.log(order.orderstatus);
order.checkout();
console.log(order.orderstatus);
