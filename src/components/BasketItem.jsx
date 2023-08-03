function BasketItem(props) {
  const {
    mainId,
    displayName,
    regularPrice,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {displayName} x <span className="material-icons quantity" onClick={() => decQuantity(mainId)}>arrow_back</span>
      {quantity}
      <span className="material-icons quantity" onClick={() => incQuantity(mainId)}>arrow_forward</span>= {regularPrice * quantity}{' '}
      грн
      <span
        className="secondary-content"
        onClick={() => {
          removeFromBasket(mainId);
        }}
      >
        <i className="material-icons basket-delete">delete</i>
      </span>
    </li>
  );
}

export { BasketItem };
