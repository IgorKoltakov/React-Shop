import { BasketItem } from '../components/BasketItem';

function BasketList(props) {
  const { order, handleBasketShow = Function.prototype} = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum +el.price * el.quantity
  }, 0)

  return (
    <div class="collection basket-list">
      <li href="#!" class="collection-item active">
        Корзина
        <span class="secondary-content basket-close" onClick={handleBasketShow}>
          <i class="material-icons">close</i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li class="collection-item">Корзина пуста</li>
      )}
      <li href="#!" class="collection-item active">
        Общая стоимость: {totalPrice}
      </li>
    </div>
  );
}

export { BasketList };
