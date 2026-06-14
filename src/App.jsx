import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Highlights from "./Components/Highlights";
import Features from "./Components/Features";
import RecentBooks from "./Components/RecentBooks";
import Explore from "./Components/Explore";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Home/>
      <Footer />
      </div>
    </Router>
  );
}

export default App;