import { NoDiscount, TenPercentDiscount, FiftyPercentDiscount } from './classes/discount';
import { CartItem } from './classes/interfaces/cart-item';
import { Messeging } from './services/messeging';
import { Order } from './classes/order-status';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { EnterpriselCustomer, IndividualCustomer } from './classes/customer';

/**
 * Módulos de alto nível não deve depender de módulos de baixo nível. Ambos
 * devem depender de abstrações. Abstrações não devem depender de detalhes,
 * detalhes devem depender de abstrações e não de implementações.
 * 
 * Classes de baixo nível são classes que executam tarefas (os detalhes)
 * Classes de alto nível são classes que gerenciam as classes de baixo nível.
 */

const noDiscount = new NoDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messeging = new Messeging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Wesley', 'Santos', '125456987-58');
const enterpriselCustomer = new EnterpriselCustomer('Empresa Boa', '456789456123/2158');

const order = new Order(shoppingCart, messeging, persistency, enterpriselCustomer);

const smarthphone: CartItem = new Product('J5 Prime', 1400.45);
const monitor: CartItem = new Product('Acer 22"', 860.5);
const keybord: CartItem = new Product('RedDragon ZX', 340.18);

const cartItems: CartItem[] = [smarthphone, monitor, keybord];

cartItems.forEach((data) => shoppingCart.addItem(data));
console.log(shoppingCart.items);
console.log(`R$ ${shoppingCart.totalWithDiscount()}`);
console.log(order.orderstatus);
order.checkout();
console.log(order.orderstatus);
