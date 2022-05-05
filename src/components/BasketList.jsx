import { BasketItem } from '../components/BasketItem';

function BasketList(props) {
  const {
    order,
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <div className="collection basket-list">
      <li href="#!" className="collection-item active">
        Корзина
        <span
          className="secondary-content basket-close"
          onClick={handleBasketShow}
        >
          <i className="material-icons">close</i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li href="#!" className="collection-item active">
        Общая стоимость: {totalPrice}
        <button className="secondary-content btn btn-small right"> Оформить заказ</button>
      </li>
    </div>
  );
}

export { BasketList };
