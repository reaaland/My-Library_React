import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./ui/Price";
import React, { useState, useEffect, useRef } from "react";

const Book = ({
  id,
  url,
  title,
  originalPrice,
  salePrice,
  rating,
  summary,
}) => {
    
    const mountedRef = useRef(true);
    const [imageLoading, setImageLoading] = useState(true);

    useEffect(() => {
      return () => {
        mountedRef.current = false;
      };
    }, []);

    function imageLoaded() {
      setTimeout(() => {
        if (mountedRef.current) {
          setImageLoading(false);
        }
      }, 300);
    }
 
  return (
    <div className="book">
      <Link to={`/books/${id}` }>
          <figure className="book__img--wrapper">
      {imageLoading && <div className="book__img--skeleton"></div>}

      <img
        className={`book__img ${imageLoading ? "book__img--hidden" : ""}`}
        src={url}
        alt={title}
        onLoad={imageLoaded}
      />
    </figure>
        </Link>
      <div className="book__title">
        <Link to={`/books/${id}` }className="book__title--link">
          {title}
        </Link>
      </div>
      <Rating rating={rating} />
      <Price salePrice={salePrice} originalPrice={originalPrice} />
    </div>
  );
};

export default Book;