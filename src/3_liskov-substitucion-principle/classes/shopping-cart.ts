import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _itens: CartItem[] = [];

  constructor(private readonly discount: Discount) {};

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

  totalWithDiscount(): number {
    return this.discount.calculate(this.total())
  }

  clear(): void {
    console.log('Limpando carrinho de compras...');
    this._itens.length = 0;
  }

  isEmpty(): boolean {
    return this._itens.length === 0;
  }
}
