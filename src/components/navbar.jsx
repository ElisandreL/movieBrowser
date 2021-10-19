import React from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from "./home";
import Discover from "./discover";
import Details from "./details";

  export default function Nav() {
      return (
        <Router>
            <div>
                <Switch>
                    <Route path="/details">
                        <Details />
                    </Route>
                    <Route path='/discover'>
                        <Discover />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/details">Details</Link>
                        </li>
                        <li>
                            <Link to="/discover">Discover</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
      )
  }
