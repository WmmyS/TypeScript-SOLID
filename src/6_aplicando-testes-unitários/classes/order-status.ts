import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessegingProtocol } from './interfaces/messeging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderstatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messeging: MessegingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
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
      `Seu pedido com o total de R$ ${this.cart.totalWithDiscount()} foi recebido`,
    );

    this.persistency.saveOrder();
    this.cart.clear();
    console.log(`O cliente é: ${this.customer.getName()}, documento: ${this.customer.getIDN()}`)
  }
}
