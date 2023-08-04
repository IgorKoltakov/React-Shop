import { useContext } from "react";
import { Context } from "./Shop";

function Cart() {
  const { order, handleBasketShow } = useContext(Context);

  return (
    <div className="cart col-1" onClick={handleBasketShow}>
      <i className="fa-solid fa-bag-shopping fa-lg text-body-secondary"></i>
      {order.length ? (
        <span className="cart-quantity">{order.length}</span>
      ) : null}
    </div>
  );
}

export { Cart };
