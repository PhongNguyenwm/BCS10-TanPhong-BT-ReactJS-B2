import React, { Component } from "react";
import Model from "./Model";

export default class Layout extends Component {
  render() {
    let background = `./GlassesImage/background.jpg`;
    const backgroundImageStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      height: `100vh`,
      position: "relative",
    };
    const overlayStyle = {
      backgroundColor: `rgba(0,0,0,.5)`,
      position: `absolute`,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };
    return (
      <div style={backgroundImageStyle}>
        <div style={overlayStyle}></div>
        <Model />
      </div>
    );
  }
}
