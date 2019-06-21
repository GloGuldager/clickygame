import React, { Component } from "react";
import logo from './favicon.ico';
import './App.css';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import imagecards from "./imagecards.json";
// import Counter from "./components/Counter";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import FooterPage from "./components/FooterPage";

class App extends Component {
  // Setting this.state.imagecards to the imagecards json array
  state = {
    imagecards,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    shakeit: "false"
  };

  clickImage = id => {
    // Arrange the images in a random manner
    const shuffledArray = this.shuffleArray(imagecards);
    this.setState({imagecards: shuffledArray});
    // if clicked an image already clicked set this.state.score = 0; empty clickeadArray, end of block
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message: "Sorry, you already clicked that image! Game Over ☹️ Click an image to start again!", shakeit: "true"});
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message: "Correct!! 🙂 Keep Going",
        shakeit: "false"
      });
    }
    // set topscore = score if score>topscore.
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    // shake the wrapper if shakeit is set to true
  }

  shuffleArray = (imagesArray) => {
    for (let i = imagesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
    }
    return imagesArray;
}


  // Map over this.state.imagecards and render an ImageCard component for each image object
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Clicky Game!!</h1>
      </header>
      <h3 className="App-intro">
      <p className = "instruction"><strong>Click on an image to earn points,</strong></p>
      <p className = "instruction"><strong>but try not to click an image more than once!</strong></p>
        <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
        <p className="message"><strong>{this.state.message}</strong></p>
      </h3>


      <Wrapper
        shakeWrapper = {this.state.shakeit}
        images=
          {this.state.imagecards.map(image => (
            <ImageCard
              clickImage={this.clickImage}
              id={image.id}
              key={image.id} // to get rid of unique key prop warning
              image={image.image}
            />
          ))}
        />
      <FooterPage />
      </div>
  );
  }
}
export default App;
