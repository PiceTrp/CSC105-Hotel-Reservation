import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const Nav = () => {
    const [longScrolled, setLongScrolled] = useState(false);

    const scrollEvent = () => {
        if (window.pageYOffset > window.innerHeight - 30) {
            setLongScrolled(true);
        } else {
            setLongScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    });

    const dropDown = () => {};

    return (
        <nav
            style={{
                backgroundColor: longScrolled ? "#EFEFEF" : "transparent",
                boxShadow: longScrolled
                    ? "0 5px 10px -2px rgba(0,0,0,0.2)"
                    : "none",
            }}
        >
            <div class="nav-container">
                <div>
                    <p
                        style={{
                            color: longScrolled ? "black" : "aliceblue",
                        }}
                    >
                        ROYAL &nbsp; CORAL
                    </p>
                </div>
                <div style={{ color: longScrolled ? "black" : "aliceblue" }}>
                    <a href="#" class="ordinary">
                        HOME
                    </a>
                    <a href="#" class="ordinary">
                        DISCOVER
                    </a>
                    <a href="#" class="ordinary">
                        ACCOMMODATION
                    </a>
                    <a href="#" class="ordinary">
                        SERVICE
                    </a>
                    <a href="#" class="ordinary">
                        CONTACT
                    </a>
                    <a href="#" class="ordinary">
                        RESERVATION
                    </a>
                    <a href="/login" class="book">
                        <p class="book-hover">SIGN UP</p>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
