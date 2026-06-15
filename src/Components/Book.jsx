import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Book = ({
  id,
  url,
  title,
  originalPrice,
  salePrice,
  rating,
}) => {
 
  return (
    <div className="book">
      <Link to="/books/1">
      <figure className="book__img--wrapper">
        <img
          className="book__img"
          src={url}
          alt={title}
        />
      </figure>
        </Link>
      <div className="book__title">
        <Link to="/" className="book__title--link">
          {title}
        </Link>
      </div>
      <Rating rating={rating} />
      <Price salePrice={book.salePrice} originalPrice={book. originalPrice} />
    </div>
  );
};

export default Book;