import React from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from "../pages/home";
import Discover from "../pages/discover";
import Details from "../pages/details";

  export default function Nav() {
      return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
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
      )
  }
