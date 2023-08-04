import { Cart } from "./Cart";

function Header() {
  return (
    <header className="--bs-primary">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center text-white">React Shop</div>
          </div>
          <Cart />
        </div>
      </div>
    </header>
  );
}

export { Header };
