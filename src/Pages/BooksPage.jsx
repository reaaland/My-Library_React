import React, { useState } from "react";
import { books } from "../data/books";
import Book from "../Components/Book";

const Books = () => {
  const [booksList, setBooksList] = useState(books);

function filterBooks(event) {
  const sortValue = event.target.value;

  if (sortValue === "LOW_TO_HIGH") {
    setBooksList([...booksList].sort((a, b) => a.originalPrice - b.originalPrice));
  }

  if (sortValue === "HIGH_TO_LOW") {
    setBooksList([...booksList].sort((a, b) => b.originalPrice - a.originalPrice));
  }

  if (sortValue === "RATING") {
    setBooksList([...booksList].sort((a, b) => b.rating - a.rating));
  }
}

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>

                <select id="filter" defaultValue="DEFAULT" onChange={filterBooks}>
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>

              <div className="books">
                {booksList.map((book) => (
                  <Book book={book} key={book.id} {...book} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;