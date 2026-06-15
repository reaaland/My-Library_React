import React from "react";


import { library } from "@fontawesome/fontawesome-svg-core";
import {faBars, faShoppingCart, faTimes, faTags, faStar, faStarHalfAlt, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById( 'root') 
);