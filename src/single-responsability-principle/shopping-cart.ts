import { CartItem } from './interfaces/cart-item';
import { OrderStatus } from './interfaces/order-status';

export class ShoppingCart {
  private readonly _itens: CartItem[] = [];
  private _orderstatus: OrderStatus = 'open';

  addItems(item: CartItem): void {
    this._itens.push(item);
  }

  removeItems(index: number): void {
    this._itens.splice(index, 1);
  }

  getItems(): Readonly<CartItem[]> {
    return this._itens;
  }

  total(): number {
    return +this._itens
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  clear(): void {
    console.log('Limpando carrinho de compras...');
    this._itens.length = 0;
  }

  isEmpty(): boolean {
    return this._itens.length === 0;
  }

  save(): void {
    console.log('Sua ordem foi salva com sucesso');
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderstatus = 'closed';
    console.log(`Seu pedido com o total de R$ ${this.total()} foi recebido`);
    this.save();
    this.clear();
  }
}

const shoppingCart = new ShoppingCart();

const smarthphone: CartItem = { name: 'J5 Prime', price: 1400.45 };
const monitor: CartItem = { name: 'Acer 22"', price: 860.5 };
const keybord: CartItem = { name: 'RedDragon ZX', price: 340.18 };

const cartItems: CartItem[] = [smarthphone, monitor, keybord];

cartItems.forEach((data) => shoppingCart.addItems(data));
console.log(shoppingCart.getItems());
console.log(`R$ ${shoppingCart.total()}`);
shoppingCart.checkout();
