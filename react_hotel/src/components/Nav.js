import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Bg from "../pictures/Everypics_inweb/decoration/close-up-white-marble-texture-background-min.jpg";
import { DataContext } from "../context/DataContext";
import { Link, useHistory } from "react-router-dom";

const Nav = ({ bannerRef, aboutRef, roomRef, footerRef }) => {
    const [longScrolled, setLongScrolled] = useState(false);
    const { data, setData } = useContext(DataContext);
    const history = useHistory();
    const scrollEvent = () => {
        if (window.pageYOffset > window.innerHeight - 30) {
            setLongScrolled(true);
        } else {
            setLongScrolled(false);
        }
    };

    const gotoBook = () => {
        if (data.loggedin) {
            history.push("/booking");
        } else {
            alert("Please Log in first.");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    });

    return (
        <nav
            style={{
                backgroundColor: longScrolled ? "#EFEFEF" : "transparent",
                backgroundImage: longScrolled ? `url(${Bg})` : "",
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
                    <a
                        href="#"
                        class="ordinary"
                        onClick={() => bannerRef.current.scrollIntoView()}
                    >
                        HOME
                    </a>
                    <a
                        href="javascript:void(0)"
                        class="ordinary"
                        onClick={() => aboutRef.current.scrollIntoView()}
                    >
                        DISCOVER
                    </a>
                    <a
                        href="javascript:void(0)"
                        class="ordinary"
                        onClick={() => roomRef.current.scrollIntoView()}
                    >
                        ACCOMMODATION
                    </a>

                    <a
                        href="javascript:void(0)"
                        class="ordinary"
                        onClick={() => footerRef.current.scrollIntoView()}
                    >
                        CONTACT
                    </a>
                    <Link onclick={gotoBook} class="ordinary">
                        RESERVATION
                    </Link>
                    <Link
                        to={data.loggedin ? "/myAccount" : "/login"}
                        class="book"
                    >
                        <p class="book-hover">
                            {data.loggedin ? "My Account" : "LOG IN"}
                        </p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
