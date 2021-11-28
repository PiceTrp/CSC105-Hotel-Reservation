import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";
import Cookies from "js-cookie";
import React from "react";

const BookingHead = () => {
    const { data, setData } = useContext(DataContext);

    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleHome = () => {
        history.push("/");
    };
    const handleLogout = () => {
        history.push("/login");
    };

    return (
        <div class="nav">
            <p>Royal Coral</p>
            <div class="right">
                <div>
                    <p>Book online or call</p>
                    <p>+88 84 384 0477</p>
                </div>
                <div class="vertical-line"></div>
                <div>
                    <div>
                        <p>Sign-in</p>
                        <p>Create an account</p>
                    </div>
                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        style={{
                            backgroundColor: "black",
                            width: "40px",
                            minWidth: "20px",
                            marginLeft: "27px",
                            height: "60px",
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{
                                color: "white",
                                alignSelf: "center",
                                marginLeft: "13px",
                            }}
                        />
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem>
                            <a
                                href="/"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                Home
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                onClick={() => {
                                    Cookies.remove("token");
                                }}
                            >
                                Logout
                            </a>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default BookingHead;
