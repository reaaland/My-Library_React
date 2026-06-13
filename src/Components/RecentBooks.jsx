import The10XRule from "../assets/book-1.jpeg";
import BeObsessedOrBeAverage from "../assets/book-2.jpeg";
import RichDadPoorDad from "../assets/book-3.jpeg";
import CashflowQuadrant from "../assets/book-4.jpeg";
import lawsOfPower from "../assets/book-5.jpeg";
import The5SecondRule from "../assets/book-6.jpeg";
import YourNextFiveMoves from "../assets/book-7.jpg";
import Mastery from "../assets/book-8.jpeg";

function RecentBooks() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Recent <span className="purple">Books</span>
          </h2>

          <div className="books">
            <div className="book">
              <figure className="book__img--wrapper">
                <img className="book__img" src={The10XRule} alt="The 10X Rule" />
              </figure>
              <div className="book__title">The 10X Rule</div>
              <div className="book__ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-alt"></i>
              </div>
              <div className="book__price">
                <span className="book__price--normal">$59.95</span> $14.95
              </div>
            </div>

            <div className="book">
              <figure className="book__img--wrapper">
                <img className="book__img" src={BeObsessedOrBeAverage} alt="Be Obsessed Or Be Average" />
              </figure>
              <div className="book__title">Be Obsessed Or Be Average</div>
              <div className="book__ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-alt"></i>
              </div>
              <div className="book__price">
                <span className="book__price--normal">$59.95</span> $14.95
              </div>
            </div>

            <div className="book">
              <figure className="book__img--wrapper">
                <img className="book__img" src={RichDadPoorDad} alt="Rich Dad Poor Dad" />
              </figure>
              <div className="book__title">Rich Dad Poor Dad</div>
              <div className="book__ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-alt"></i>
              </div>
              <div className="book__price">
                <span className="book__price--normal">$59.95</span> $14.95
              </div>
            </div>

            <div className="book">
              <figure className="book__img--wrapper">
                <img className="book__img" src={CashflowQuadrant} alt="Cashflow Quadrant" />
              </figure>
              <div className="book__title">Cashflow Quadrant</div>
              <div className="book__ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-alt"></i>
              </div>
              <div className="book__price">
                <span className="book__price--normal">$59.95</span> $14.95
              </div>
            </div>

            <div className="book">
              <figure className="book__img--wrapper">
                <img className="book__img" src={lawsOfPower} alt="48 Laws of Power" />
              </figure>
              <div className="book__title">48 Laws of Power</div>
              <div className="book__ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-alt"></i>
              </div>
              <div className="book__price">
                <span className="book__price--normal">$59.95</span> $14.95
              </div>
            </div>

            <div className="book">
              <figure className="book__img--wrapper">
                <img className="book__img" src={The5SecondRule} alt="The 5 Second Rule" />
              </figure>
              <div className="book__title">The 5 Second Rule</div>
              <div className="book__ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-alt"></i>
              </div>
              <div className="book__price">
                <span className="book__price--normal">$59.95</span> $14.95
              </div>
            </div>

            <div className="book">
              <figure className="book__img--wrapper">
                <img className="book__img" src={YourNextFiveMoves} alt="Your Next Five Moves" />
              </figure>
              <div className="book__title">Your Next Five Moves</div>
              <div className="book__ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-alt"></i>
              </div>
              <div className="book__price">
                <span className="book__price--normal">$59.95</span> $14.95
              </div>
            </div>

            <div className="book">
              <figure className="book__img--wrapper">
                <img className="book__img" src={Mastery} alt="Mastery" />
              </figure>
              <div className="book__title">Mastery</div>
              <div className="book__ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-alt"></i>
              </div>
              <div className="book__price">
                <span className="book__price--normal">$59.95</span> $14.95
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentBooks;
