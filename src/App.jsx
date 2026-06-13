import React from "react";
import ReactDOM from "React-dom"
import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Highlights from "./Components/Highlights";
import Features from "./Components/Features";
import RecentBooks from "./Components/RecentBooks";
import Explore from "./Components/Explore";
import Footer from "./Components/Footer";
import { library } from "@fontawesome/fontawesome-svg-core";
import {faBars, faShoppingCart, faTimes} from "@fortawesome/free-solid-svg-icons";

Library.add( faBars, faShoppingCart, faTimes )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById( 'root') 
);

function App() {
  return (
    <>
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
    </>
  );
}

export default App;