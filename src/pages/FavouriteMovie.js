import React, { Component } from "react";
import { gettheNameoftheMovieApi } from "../lib/api/OMDbAPI";
import App from "../App";
class FavouriteMovie extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    moive_name: "",
    movie_data: [],
  };
  updateInputValue = (evt) => {
    this.setState({
      moive_name: evt.target.value,
    }
    );
  };

  getMovieData = async () => {
    console.log("this.state.movie_name =>", this.state.moive_name)
    if (this.state.moive_name) {
      console.warn(this.state.moive_name);
      let response = await gettheNameoftheMovieApi(this.state.moive_name);
      console.log("Here you go moviedata component =>>", response);
      this.setState({ movie_data: response.data.Search });
      /*console.warn(this.state.movie_data); important to see whats going on*/

    }
    else {
      return <h1>please Enter your movie</h1>
    }

  };

  /*componentDidMount() {}*/

  render() {
    console.log("this.state =>", this.state)
    return (
      <center>
        <div className="form-inline">
          <input
            className="form-control mr-sm-2"
            aria-label="Search"
            type="search"
            name="username"
            required
            onChange={this.updateInputValue}
          ></input>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={this.getMovieData}
          >
            Search
          </button>
        </div>

        {this.state.movie_data.map((movie, index) => (
          <div key={index}>
            <h4 className="par">{movie.Title}</h4>
            <img src={movie.Poster} id="imageMovie"></img>
          </div>
        ))}
      </center>
    );
  }
}

export default FavouriteMovie;
/*OnClick get the last value of the OnChange input */
