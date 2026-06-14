import React from "react";


import { library } from "@fontawesome/fontawesome-svg-core";
import {faBars, faShoppingCart, faTimes, faTags, faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";

Library.add( faBars, faShoppingCart, faTimes )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById( 'root') 
);