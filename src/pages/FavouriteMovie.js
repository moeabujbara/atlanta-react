import React, { Component } from "react";
import { gettheNameoftheMovieApi } from "../lib/api/OMDbAPI";
class FavouriteMovie extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    moive_name: null,
    movie_data: [],
  };
 

  updateInputValue = (evt) => {
    this.setState({
      moive_name: evt.target.value,
     
    });
  };

  getMovieData = async () => {
    if (this.state.moive_name!=null) {
      console.warn(this.state.moive_name);
      let response = await gettheNameoftheMovieApi(this.state.moive_name);
      console.log("Here you go moviedata component =>>", response);
      this.setState({ movie_data: response.data.Search });
      /*console.warn(this.state.movie_data); important to see whats going on*/
      
    } else {
    return  <h2>Please Enter your Movie Name</h2>
      
    }
   
  };

  /*componentDidMount() {}*/

  render() {
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

        {this.state.movie_data.map((i,x,b) => (
          <div key={x}className="div1">
            <h4 key={b}className="par">{i.Title}</h4>
            <img key={b}src={i.Poster} id="imageMovie"></img>
          </div>
        ))}
      </center>
    );
  }
}

export default FavouriteMovie;
/*OnClick get the last value of the OnChange input */
