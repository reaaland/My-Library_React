import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Book = ({
  url,
  title,
  originalPrice,
  salePrice,
  rating,
}) => {
 
  return (
    <div className="book">
      <figure className="book__img--wrapper">
        <img
          className="book__img"
          src={url}
          alt={title}
        />
      </figure>

      <div className="book__title">
        <a href="/" className="book__title--link">
          {title}
        </a>
      </div>

      <div className="book__ratings">
        {[...Array(Math.floor(rating))].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon="star"
          />
        ))}

        {!Number.isInteger(rating) && (
          <FontAwesomeIcon icon="star-half-alt" />
        )}
      </div>

      <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">
              ${originalPrice}
            </span>
            ${salePrice}
          </>
        ) : (
          <>${originalPrice}</>
        )}
      </div>
    </div>
  );
};

export default Book;