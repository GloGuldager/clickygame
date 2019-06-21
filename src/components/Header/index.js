import React from "react";
import "./Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: '#6caddb'
  },
  // headingStyle: {
  //   fontSize: 100
  // }
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header style={styles.headerStyle} className="header">

    <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1 className="App-title">Welcome to React Clicky Game!!</h1>
    </header>
    <h3 className="App-intro">
      <strong>Click on an image to earn points, but don't click on any, more than once!</strong> 
      <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
      <p className="message"><strong>{this.state.message}</strong></p>
    </h3>
</div>
</header>
  );
}

export default Header;
