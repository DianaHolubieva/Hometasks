import React, { Component } from "react";
import Slide from "./Slide";
import Slider from "./Slider";
import images from "./images";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  };

  setNext = () => {
    const { index } = this.state;
    const { images } = this.props;
    this.setState({ index: (index + 1) % images.length });
  };
  setPrev = () => {
    const { index } = this.state;
    const { images } = this.props;
    this.setState({ index: (index - 1 + images.length) % images.length });
  };

  render() {
    const { index } = this.state;
    const { images } = this.props;
    return (
      <div>
        <Slide currentImage={images[index]} />
        <button
          next={this.setNext}
          prev={this.setPrev}
        />
      </div>
    );
  }
}

export default Carousel;