import Header from './components/header';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Discover from "./pages/discover";
import Details from "./pages/details";
import './style/css/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>   
        <Navbar />
        <Switch>
            <Route path="/details">
                <Details />
            </Route>
            <Route path='/discover'>
                <Discover />
            </Route>
            <Route path='/home'>
                <Home />
            </Route>
        </Switch>
    </Router>
  );
}
