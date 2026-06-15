import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  return (
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
  );
};

export default Rating;