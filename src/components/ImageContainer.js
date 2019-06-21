import React, { Component } from "react";
import ImageCard from "./ImageCard";
import Wrapper from "./Wrapper";
import imagecards from "./imagecards.json";
import Counter from "./Counter";
import Navbar from "./Navbar";
import Header from "./Header";
import FooterPage from "./FooterPage";

class App extends Component {
  // Setting this.state.imagecards to the imagecards json array
  state = {
    imagecards
  };

  removeImage = id => {
    // Filter this.state.imagecards for imagecards with an id not equal to the id being removed
    const imagecards = this.state.imagecards.filter(image => image.id !== id);
    // Set this.state.imagecards equal to the new imagecards array
    this.setState({ imagecards });
  };

  // Map over this.state.imagecards and render an ImageCard component for each image object
  render() {
    return (
      <>
      <Navbar/>
      <Header/>
      <Counter />
      <Wrapper>
        {this.state.imagecards.map(image => (
          <ImageCard
            removeImage={this.removeImage}
            id={image.id}
            key={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
      <FooterPage />
      </>
  );
  }
}

export default App;
