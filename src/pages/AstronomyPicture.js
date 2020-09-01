import React, { Component } from "react";
import { getAstronomyPicOfTheDay } from "../lib/api/nasa";

class AstronomyPicture extends Component {
  state = {
    /*state could only be used in class components, not in functional components. */
    pictureData: "null",
  };

  async componentDidMount() {
    let response = await getAstronomyPicOfTheDay();
    console.log("Here from AstronomyPicture component =>> ", response);
    this.setState({ pictureData: response.data });
  }
  render() {
    return (
      <div id="firstpage">
        {this.state.pictureData == null ? (
          "loading"
        ) : (
          <div className="Main1">
            <center>
              <iframe
                id="ifram1"
                src={this.state.pictureData.url}
                style={{ height: "500px", width: "800px" }}
              ></iframe>
            </center>

            <p id="explian">{this.state.pictureData.explanation}</p>
          </div>
        )}
      </div>
    );
  }
}

export default AstronomyPicture;
