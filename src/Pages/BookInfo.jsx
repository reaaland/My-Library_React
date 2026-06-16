import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Components/Rating";
import Price from "../Components/ui/Price";
import Book from "../Components/Book";
import { books } from "../data/books";


  const BookInfo = ( { addToCart}) => {
  const { id } = useParams();

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  const { url, title, originalPrice, salePrice, rating, summary } = book;

  const recommendedBooks = books
    .filter((b) => b.rating === 5 && b.id !== book.id)
    .slice(0, 4);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__selected--link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>

              <h2 className="book__selected--title--top">Books</h2>
            </div>

            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  className="book__selected--img"
                  src={url}
                  alt={title}
                />
              </figure>

              <div className="book__selected--description">
                <h2 className="book__selected--title">{title}</h2>

                <Rating rating={rating} />

                <div className="book__selected--price">
                  <Price
                    originalPrice={originalPrice}
                    salePrice={salePrice}
                  />
                </div>

                <div className="book__summary">
                <h3 className="book__summary--title">Summary</h3>

                <p className="book__summary--para">
                  {summary}
                </p>
                </div>

              <button onClick={() => addToCart(book)}>
                Add to Cart
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
                Recommended Books
              </h2>
            </div>

            <div className="books">
              {recommendedBooks.map((book) => (
                <Book key={book.id} {...book} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;