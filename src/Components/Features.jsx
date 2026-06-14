import codingInterview from "../assets/crack the coding interview.png";
import atomicHabits from "../assets/atomic habits.jpg";
import davidGoggins from "../assets/david goggins.jpeg";
import sellOrBeSold from "../assets/SellOrBeSold.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Book from "./Book";

const Features = () => {
    return (
        <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
              <Book/>
              <Book/>
              <Book/>
              <Book/>
          </div>
        </div>
    </section>
    );
}

export default Features;