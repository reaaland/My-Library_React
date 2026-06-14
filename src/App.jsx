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


function App() {
  return (
    <Router>
      <section id="landing">
        <Nav />
        <Header />
      </section>
      <main>
        <Highlights />
        <Features />
        <RecentBooks />
        <Explore />
      </main>
      <Footer />
    </Router>
  );
}

export default App;