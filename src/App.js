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
                <Link to={"/AstronomyPicture.js"} className="nav-link active">
                  {" "}
                  AstronomyPicture{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/FavouriteMovie.js"} className="nav-link active">
                  FavouriteMovie
                </Link>
              </li>
            </ul>
            <hr />
          </nav>
        </div>

        <Switch>
          <Route
            exact
            path="/AstronomyPicture.js"
            component={AstronomyPicture}
          />
          <Route path="/FavouriteMovie.js" component={FavouriteMovie} />
        </Switch>

        <footer class="page-footer font-small mdb-color darken-3 pt-4">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-md-6">
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    width="400"
                    height="400"
                  >
                    allowfullscreen
                  </iframe>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-copyright text-center py-3">
            © 2020 Copyright:
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
