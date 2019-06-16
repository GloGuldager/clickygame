import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import imagecards from "./imagecards.json";
import Introduce from "./components/Introduce";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FooterPage from "./components/FooterPage";

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
      <div>
        <Introduce />
        <Counter />
      </div>
      <FooterPage />
      </>
  );
  }
}

export default App;
