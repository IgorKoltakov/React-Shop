function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name} x <span className="material-icons quantity" onClick={() => decQuantity(id)}>arrow_back</span>
      {quantity}
      <span className="material-icons quantity" onClick={() => incQuantity(id)}>arrow_forward</span>= {price * quantity}{' '}
      грн
      <span
        className="secondary-content"
        onClick={() => {
          removeFromBasket(id);
        }}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
