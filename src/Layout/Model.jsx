import React, { Component } from "react";

export default class Model extends Component {
  state = {
    glassArr: [
      {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1-glass.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./glassesImage/v2-glass.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./glassesImage/v3-glass.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: "./glassesImage/v4-glass.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: "./glassesImage/v5-glass.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: "./glassesImage/v6-glass.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: "./glassesImage/v7-glass.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: "./glassesImage/v8-glass.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: "./glassesImage/v9-glass.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    ],
    type: "v1",
    selectedGlass: null,
  };
  handleChangeglass = (glass) => this.setState({ selectedGlass: glass });
  render() {
    let model = { url: `./GlassesImage/model.jpg` };
    let parentDivStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "400px",
      width: "400px",
      // position: "relative",
    };

    let imgContainerStyle = {
      maxWidth: "100%",
      maxHeight: "100%",
      position: "relative",
    };
    let imgGlassStyle = {
      maxWidth: "25%",
      maxHeight: "100%",
      position: "absolute",
      left: "214px",
      top: "115px",
      backgroundColor: "transparent",
      opacity: "0.8",
    };
    let layoutStyle = {
      position: "absolute",
      bottom: "26px",
      left: "143px",
      width: "50%",
      backgroundColor: "rgba(255, 156, 42, 0.5)",
      // padding: "10px",
    };

    return (
      <div className="container">
        <div className="row pt-2 w-70">
          <div className="col-6 " style={parentDivStyle}>
            <img
              className="w-50"
              src={model.url}
              alt=""
              style={imgContainerStyle}
            />
            {this.state.selectedGlass && (
              <div>
                <img
                  src={this.state.selectedGlass.url}
                  alt=""
                  style={imgGlassStyle}
                />
                <div style={layoutStyle}>
                  <h6>{this.state.selectedGlass.name}</h6>
                  <p>{this.state.selectedGlass.desc}</p>
                </div>
              </div>
            )}
          </div>
          <div className="col-6 " style={parentDivStyle}>
            <img
              className="w-50"
              src={model.url}
              alt=""
              style={imgContainerStyle}
            />
          </div>
          <div
            className="container mt-1"
            style={{
              backgroundColor: "white",
              height: "150px",
              zIndex: 100,
            }}
          >
            {this.state.glassArr.map((glass) => (
              <button
                key={glass.id}
                className="col-2"
                onClick={() => this.handleChangeglass(glass)}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={glass.url}
                  alt=""
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
