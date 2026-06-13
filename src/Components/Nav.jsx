import logo from "../assets/Library.svg";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <img className="logo" src={logo} alt="Library logo" />

        <ul className="nav__links">
          <li><a href="#" className="nav__link">Home</a></li>
          <li><a href="#" className="nav__link">Contact</a></li>
          <li><a href="#" className="nav__link nav__link--primary">Books</a></li>
        </ul>

        <button className="btn__menu">
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close">
            <i className="fa-solid fa-times"></i>
          </button>

          <ul className="menu__links">
            <li className="menu__list">
              <a href="#" className="menu__link">Home</a>
            </li>
            <li className="menu__list">
              <a href="#features" className="menu__link">Books</a>
            </li>
            <li className="menu__list">
              <span className="menu__link no-cursor">
                Contacts
               </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;