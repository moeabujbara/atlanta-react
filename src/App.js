import React, { Component } from "react";
/*import Router from "./router.js"; /*bring the component from exact file using import*/
import { getAstronomyPicOfTheDay } from "./lib/api/nasa.js"; /*call the function from the file */
import FavouriteMovie from "./pages/FavouriteMovie.js";
import AstronomyPicture from "./pages/AstronomyPicture.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import x from "./images/x.jpg"; /*to read locally image<img src={x} alt="myimagename>"*/

class App extends Component {
  /* extends mean inheritance */
  render() {
    return (
      <Router>
        <div id="form-inline">
          <nav className="navbar navbar-dark bg-dark lg">
            <ul>
              <li>
                <h1>
                  <Badge variant="warning">ATLANTA</Badge>
                </h1>
              </li>
              <li className="nav-item">
                <Link to={"/astronomy-picture"} className="nav-link active">
                  {" "}
                  Astronomy Picture{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/favourite-movie"} className="nav-link active">
                  Favourite Movie
                </Link>
              </li>
            </ul>
            <hr />
          </nav>
        </div>

        <Switch>
          <Route
            exact
            path="/astronomy-picture"
            component={AstronomyPicture}
          />
          <Route path="/favourite-movie" component={FavouriteMovie} />
        </Switch>

        <footer className="page-footer font-small mdb-color darken-3 pt-4">
          <div className="container">
            <div className="row d-flex justify-content-center">
             
                  <img src={x} alt="Fmailyimage" id="col-md-6" width="1000" height="500"></img> 
              
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            @09/01/2020 Copyright:
            <a href="WWW.GMAIL.COM"> ATLANTA@GMAIL.COM</a>
          </div>
        </footer>
      </Router>
    );
  }
}

export default App; /*to allow other pages to imported*/
/*any .js file or .css file you put it inside src file */
/*const if you plan in creating constant value(never going to recive new value) */
/* important important  you write <router/> when you want to return js elemnet not string or object */
