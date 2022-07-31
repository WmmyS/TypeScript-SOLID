import { OrderStatus } from './interfaces/order-status';
import { Messeging } from '../services/messeging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderstatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messeging: Messeging,
    private readonly persistency: Persistency,
  ) {}

  get orderstatus(): OrderStatus {
    return this._orderstatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderstatus = 'closed';
    this.messeging.sendMessage(
      `Seu pedido com o total de R$ ${this.cart.total()} foi recebido`,
    );

    this.persistency.saveOrder();
    this.cart.clear();
  }
}
