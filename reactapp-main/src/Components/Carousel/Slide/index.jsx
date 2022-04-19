import React, { Component } from "react";
import images from "../images";

class Slide extends Component {
    constructor(props) {
        super(props);
        const img = new Image();
        this.state = {
            img,
        };
    }

    render() {
        const { img } = this.state;
        const { currentImage } = this.props;
        return (
            <div>
                <figcaption>{currentImage}</figcaption>
                <img
                    src={currentImage.src}
                ></img>
            </div>
        );
    }
}

export default Slide;