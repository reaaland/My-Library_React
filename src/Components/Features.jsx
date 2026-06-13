import codingInterview from "../assets/crack the coding interview.png";
import atomicHabits from "../assets/atomic habits.jpg";
import davidGoggins from "../assets/david goggins.jpeg";

function Features() {
    return (
        <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            <div className="book">
              <figure className="book__img--wrapper">
                <img className="book__img" src={codingInterview} alt="./assets/crack the coding interview.png" alt="" />
              </figure>
              <div className="book__title">
                Crack the Coding Interview
              </div>
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
                <img className="book__img" src={atomicHabits} alt="./assets/atomic habits.jpg"/>
              </figure>
              <div className="book__title">
                Atomic Habits
              </div>
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
                <img className="book__img" src={davidGoggins} alt="./assets/david goggins.jpeg"/>
              </figure>
              <div className="book__title">
                Can't Hurt Me
              </div>
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

export default Features;