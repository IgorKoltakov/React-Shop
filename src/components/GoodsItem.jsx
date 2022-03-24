function GoodsItem(props) {
  const { id, name, description, price, full_background } = props;
  return (
    <div class="card" id={id}>
      <div class="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div class="card-content">
        <span class="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div class="card-action">
        <button className="btn">Купить</button>
        <span className="right">{price}</span>
      </div>
    </div>
  );
}

export { GoodsItem };
