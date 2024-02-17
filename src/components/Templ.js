import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Food_drink from "./Food_drink";
import ContactUs from "./ContactUs";
import Art from "./Art";
import ThingsToDo from "./ThingsToDo";





function Templ() {
  const [page, setPage] = useState("home");
  const insert = ReactDOM.createRoot(document.getElementById("insert_page"));

  useEffect( () => {
    if (page == "home") {
      insert.render(<Home />)
    }
    else if (page == "f&d") {
      insert.render(<Food_drink />)
    }
    else if (page == "thingsToDo") {
      insert.render(<ThingsToDo />)
    }
    else if (page == "Art") {
      insert.render(<Art />)
    }
    else if (page == "ContactUs") {
      insert.render(<ContactUs />)
    }
    else {
      console.log("Error in src\components\templ.js page not set correctly")
    }
    console.log(page);
  });

    return (
      <div>
      <nav id="MainNav">
        <span id="nav-title">London Attractions</span>
        <ul class="unorderedList line">
          <button onClick={() => setPage("home")} id="Home" class="btn btn-outline-primary">Home</button>
          <button onClick={() => setPage("f&d")} id="f&d" class="btn btn-outline-primary">Food and Drink</button>
          <button onClick={() => setPage("thingsToDo")} id="thingsToDo" class="btn btn-outline-primary">Things to do</button>
          <button onClick={() => setPage("Art")} id="Art" class="btn btn-outline-primary">Art</button>
          <button onClick={() => setPage("ContactUs")} id="ContactUs" class="btn btn-outline-primary">Contact us</button>
        </ul>
      </nav>
      </div>

    );
}

export default Templ;
