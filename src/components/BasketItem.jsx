import { useContext } from "react";
import { Context } from "./Shop";

function BasketItem(props) {
  const { mainId, displayName, quantity, regularPrice } = props;
  const { removeFromBasket, incQuantity, decQuantity } = useContext(Context);

  return (
    <div className="backet-item row ">
      <div className="name col-5">{displayName}</div>
      <div className="calc col-3">
        <span onClick={() => decQuantity(mainId)}>
          <i className="fa-solid fa-minus fa-xs"></i>
        </span>
        <spans className="quantity">{quantity}</spans>
        <span onClick={() => incQuantity(mainId)}>
          <i className="fa-solid fa-plus fa-xs"></i>
        </span>
      </div>
      <div className="total col-3"> {regularPrice * quantity} uah</div>
      <div className="remove col-1 text-end">
        <span
          onClick={() => {
            removeFromBasket(mainId);
          }}
        >
          <i className="fa-solid fa-trash fa-xs"></i>
        </span>
      </div>
    </div>
  );
}

export { BasketItem };
