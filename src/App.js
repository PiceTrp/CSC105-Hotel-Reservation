import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SmoothProvider } from 'react-smooth-scrolling';

import "./styles/index.css";

import Booking from "./pages/Booking";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >

  );
}

export default App;
