import { useContext } from "react";
import { Context } from "./Shop";

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets,
  } = props;
  const { regularPrice } = props.price;
  const { addToBasket } = useContext(Context);

  return (
    <div className="card mt-5" style={{ width: "18rem" }}>
      <img
        src={displayAssets[0].background}
        className="card-img-top"
        alt={displayName}
      />
      <div className="card-body row">
        <h5 className="card-title" style={{ fontSize: "20px" }}>
          {displayName}
        </h5>
        <p className="card-text" alt={displayDescription}>
          {displayDescription}
        </p>
        <button
          type="button"
          className="btn buy-btn btn-primary col-5"
          onClick={() => addToBasket({ mainId, displayName, regularPrice })}
        >
          Cart
        </button>
        <span
          className="col-7 d-flex justify-content-end align-items-center"
          style={{ fontSize: "1.2rem" }}
        >
          {regularPrice} UAH
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
