import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Books from "./Pages/BooksPage";
import BookInfo from "./Pages/BookInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookInfo />} />
              
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;