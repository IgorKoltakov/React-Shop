function GoodsItem(props) {
  const {
    addToBasket = Function.prototype,
    mainId,
    displayName,
    displayDescription,
    displayAssets,
  } = props;
  const {regularPrice} = props.price

  return (
    <>
      <div className="card" id={mainId}>
        <div className="card-image">
          <img src={displayAssets[0].background} alt={displayName} />
        </div>
        <div className="card-content">
          <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button
            className="btn"
            onClick={() =>
              addToBasket({
                mainId,
                displayName,
                regularPrice,
              })
            }
          >
            Купить
          </button>
          <span className="right" style={{ fontSize: "1.8rem" }}>
            {regularPrice} грн
          </span>
        </div>
      </div>
    </>
  );
}

export { GoodsItem };
