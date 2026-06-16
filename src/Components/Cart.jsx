import React from "react";

const Cart = ({ cart }) => {
    const total = cart.reduce((sum, book) => {
  return sum + (book.salePrice || book.originalPrice);
}, 0);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <h2 className="cart__title">Cart</h2>

            <div className="cart">
              <div className="cart__header">
                <span>Book</span>
                <span>Quantity</span>
                <span>Price</span>
              </div>

              <div className="cart__body">
                {cart.map((book) => (
                  <div className="cart__item" key={book.id}>
                    <div className="cart__book">
                      <img
                        src={book.url}
                        className="cart__book--img"
                        alt={book.title}
                      />

                      <div className="cart__book--info">
                        <span className="cart__book--title">{book.title}</span>
                        <span className="cart__book--price">
                          ${book.salePrice || book.originalPrice}
                        </span>
                        <button className="cart__book--remove">Remove</button>
                      </div>
                    </div>

                    <div className="cart__quantity">
                      <input type="number" min="1" value="1" readOnly />
                    </div>

                    <div className="cart__total">
                      ${book.salePrice || book.originalPrice}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart__summary">
                <h3>Total: ${total.toFixed(2)}</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;