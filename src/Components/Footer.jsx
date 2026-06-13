import logo from "../assets/Library.svg";

function Footer() {
    return(
    <footer>
    <div className="container">
      <div className="row row__column">
        <a href="#">
          <figure className="footer__logo">
           <img className="logo" src={logo} alt="Library logo" />
          </figure>
        </a>
        <div className="footer__list">
          <a href="#" className="footer__link">Home</a>
         <a href="#" className="footer__link no-cursor">About</a>
          <a href="#features" className="footer__link">Books</a>
          <a href="#" className="footer__link no-cursor">Contact</a>
        </div>
        <div className="footer__copyright">Copyright &copy; 2026 Library by Rebecca Aaland</div>
      </div>
    </div>
    </footer>
    );
}

export default Footer;