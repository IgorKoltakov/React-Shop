import { useContext } from "react";
import { GoodsItem } from "./GoodsItem";
import { Context } from "./Shop";

function GoodsList() {
  const { goods = [] } = useContext(Context);

  if (!goods.length) {
    return <h3 className="text-center text-uppercase">Nothing here</h3>;
  }

  return (
    <div className="row">
      {goods.map((item) => (
        <div className="col-xl-3 col-md-6 col-sm-12 d-flex">
          <GoodsItem key={item.mainId} {...item} />
        </div>
      ))}
    </div>
  );
}
export { GoodsList };
