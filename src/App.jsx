import React, { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/HomePage";
import Books from "./Pages/BooksPage";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Components/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]);
  }

  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookInfo addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;