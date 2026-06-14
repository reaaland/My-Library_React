import React from "react";
import logo from "../assets/Library.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={logo} alt="" className="logo" />
        </a>
       
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">
            Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
            Contact
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link  nav__link--primary">
            Books
            </a>
          </li>
          <button className="btn__menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <li className="nav__icon">
          <a href="/cart" className="nav__link">
          <FontAwesomeIcon icon={faShoppingCart} />
          </a>
          <span className="cart__length">2</span>
        </li>
        </ul>
        </div>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close">
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="menu__links">
            <li className="menu__list">
              <a href="#" className="menu__link">Home</a>
            </li>
            <li className="menu__list">
              <a href="#features" className="menu__link">Books</a>
            </li>
            <li className="menu__list">
              <a href="#features" className="menu__link">Cart</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Nav;