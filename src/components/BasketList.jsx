import { useContext } from "react";
import { BasketItem } from "../components/BasketItem";
import { Context } from "./Shop";

function BasketList() {
  const { order, setOrder, isBasketShow, handleBasketShow } =
    useContext(Context);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.regularPrice * el.quantity;
  }, 0);

  return (
    <div
      className={
        isBasketShow
          ? "container basket-list active-basket"
          : "container basket-list"
      }
    >
      <div className="row">
        <div className="col-12 text-center backet-name pt-2 text-uppercase blockquote">
          Cart
        </div>
        <button
          type="button"
          className="btn col-1 text-end close-backet"
          onClick={handleBasketShow}
        >
          <i className="fa-solid fa-xmark fa-lg"></i>
        </button>
      </div>
      <div className="row baket-list-item pt-2 pb-2">
        {order.length ? (
          order.map((item) => (
            <div className="col-12 mt-2 item">
              <BasketItem key={item.mainId} {...item} />
            </div>
          ))
        ) : (
          <div className="col-12 d-flex justify-content-center align-items-center">
            backet is empty
          </div>
        )}
      </div>
      <div className="row Total-block d-flex justify-content-center align-items-center pb-2">
        <div className=" col-md-6 col-sm-4 col-7">
          Total price: {totalPrice} uah
        </div>
        {order.length ? (
          <button
            type="button"
            className="btn btn-clear btn-danger col-md-2 col-sm-2 col-1"
            onClick={() => setOrder([])}
          >
            Clear
          </button>
        ) : (
          <button
            disabled
            type="button"
            className="btn btn-clear btn-danger col-md-2 col-sm-2 col-1"
            onClick={() => setOrder([])}
          >
            Clear
          </button>
        )}
        <button type="button" className="btn btn-success col-sm-3 col-12">
          Order now
        </button>
      </div>
    </div>
  );
}

export { BasketList };
