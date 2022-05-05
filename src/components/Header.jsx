function Header() {
  return (
    <nav className="#f50057 pink accent-3">
      <div className="nav-wrapper">
        <span href="#" className="brand-logo">
          React Shop
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <span href="#">Repo</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
