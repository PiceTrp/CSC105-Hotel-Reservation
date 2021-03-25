import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SmoothProvider } from "react-smooth-scrolling";

import "./styles/index.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Booking_room from "./pages/Booking_step2";
import Booking_confirmation from "./pages/Booking_step3";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login/signup">
                        <SignUp />
                    </Route>
                    <Route path="/booking/rooms/confirmation">
                        <Booking_confirmation />
                    </Route>
                    <Route path="/booking/rooms">
                        <Booking_room />
                    </Route>
                    <Route path="/booking">
                        <Booking />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
