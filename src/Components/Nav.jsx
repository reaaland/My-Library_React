import React from "react";
import logo from "../assets/Library.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu-open";
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
  }
  return (
    <nav>
      <div className="nav__container">
    <Link to="/">
    <img src={logo} alt="" className="logo" />
  </Link>

  <ul className="nav__links">
    <li className="nav__list">
      <Link to="/" className="nav__link">Home</Link>
    </li>

    <li className="nav__list">
      <Link to="/books" className="nav__link nav__link--primary">Books</Link>
    </li>
  </ul>

  <div className="nav__actions">
   <Link to="/cart" className="nav__link nav__cart">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart__length">2</span>
    </Link>

    <button className="btn__menu" onClick={openMenu}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  </div>
</div>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="menu__links">
            <li className="menu__list">
             <a href="#" className="menu__link" onClick={closeMenu}>Home</a>
            <a href="#features" className="menu__link" onClick={closeMenu}>Books</a>
            <a href="/cart" className="menu__link" onClick={closeMenu}>Cart</a>
            </li>
           </ul>
        </div>
    </nav>
  );
}

export default Nav;