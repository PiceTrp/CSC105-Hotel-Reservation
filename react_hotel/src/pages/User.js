import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VerticalTabs from "../components/UserVerticalTabs";

import Facebook from "../pictures/EveryComponents/All_Icons/facebook.png";
import Instragram from "../pictures/EveryComponents/All_Icons/IG.png";
import Twitter from "../pictures/EveryComponents/All_Icons/twitter.png";
import Youtube from "../pictures/EveryComponents/All_Icons/youtube.png";
import Service from "../pictures/EveryComponents/All_Icons/pic_service.png";
import img1 from "../pictures/EveryComponents/All_Icons/LVX.png";
import img2 from "../pictures/EveryComponents/All_Icons/johansen.png";

import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Cookies from "js-cookie";

import { useHistory } from "react-router-dom";

const User = () => {
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
        <section class="user">
            <div class="nav-user">
                <p>Royal Coral</p>
                <div class="right">
                    <div>
                        <p>Book online or call</p>
                        <p>+88 84 384 0477</p>
                    </div>
                    <div class="vertical-line"></div>
                    <div>
                        <div>
                            <p>Mr.{data.firstname}</p>
                            <p>Status: Member</p>
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
                                }}
                            ></FontAwesomeIcon>
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

            <div class="user-wrapper">
                <VerticalTabs />
            </div>

            <div class="end">
                <div>
                    <p>ROYAL CORAL</p>
                    <p>© Discovery Hospitality. All Rights Reserved.</p>
                </div>
                <div>
                    <a href="#">
                        <img src={Facebook} width="70px" height="70px" />
                    </a>
                    <a href="#">
                        <img src={Instragram} width="76px" height="76px" />
                    </a>
                    <a href="#">
                        <img src={Twitter} width="70px" height="70px"></img>
                    </a>
                    <a href="#">
                        <img src={Youtube} width="65px" height="65px" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default User;
