import React from "react";

const Cart = ({ cart = [], updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, book) => {
    const price = book.salePrice || book.originalPrice || 0;
    return sum + price * (book.quantity || 1);
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
                        <span className="cart__book--title">
                          {book.title}
                        </span>

                        <span className="cart__book--price">
                          ${(book.salePrice || book.originalPrice || 0).toFixed(2)}
                        </span>

                        <button
                          className="cart__book--remove"
                          onClick={() => removeFromCart(book.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="cart__quantity">
                      <input
                        type="number"
                        min="1"
                        value={book.quantity || 1}
                        onChange={(event) =>
                          updateQuantity(book.id, Number(event.target.value))
                        }
                      />
                    </div>

                    <div className="cart__total">
                      ${(
                        (book.salePrice || book.originalPrice || 0) *
                        (book.quantity || 1)
                      ).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart__summary">
                <div className="cart__summary--row">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="cart__summary--row">
                  <span>Tax</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>

                <div className="cart__summary--row">
                  <span>Total</span>
                  <span>${(total * 1.1).toFixed(2)}</span>
                </div>

                <button className="cart__summary--checkout">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;