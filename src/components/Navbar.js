import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    background: "#6caddb",
    // justifyContent: "flex-end"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
    <ul><li className="brand"><a href="/">Clicky Game</a></li><li className=""></li><li>Score: 0 | Top Score: 0</li></ul>
    <h2>Click on an image to earn points, but don't click on any image more than once!</h2>


    </nav>
  );
}

export default Navbar;
