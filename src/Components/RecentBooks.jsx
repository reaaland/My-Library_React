import { books } from "../data/books";
import Book from "./Book";

const RecentBooks = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Recent <span className="purple">Books</span>
          </h2>

          <div className="books">
            {books
              .filter((book) => book.salePrice > 0)
              .slice(0, 8)
              .map((book) => (
                <Book key={book.id} {...book} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBooks;