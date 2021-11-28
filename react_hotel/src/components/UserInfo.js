import React, { useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import HomeIcon from "@material-ui/icons/Home";
import PublicIcon from "@material-ui/icons/Public";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";

import Star from "../pictures/EveryComponents/All_Icons/star.png";
import Service from "../pictures/EveryComponents/All_Icons/service.png";
import Bg from "../pictures/Everypics_inweb/decoration/close-up-white-marble-texture-background-min.jpg";
import { DataContext } from "../context/DataContext";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    TextField: {
        width: "300px",
        marginTop: "20px",
    },
}));

const UserInfo = () => {
    const classes = useStyles();
    const { data, setData } = useContext(DataContext);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);

    return (
        <section class="user-info">
            <div class="container-userInfo">
                <div>
                    <div></div>
                    <p>Personal Information</p>
                    <div></div>
                </div>

                <div>
                    <TextField
                        className={classes.TextField}
                        id="outlined-read-only-input"
                        label="First name"
                        value={data.firstname}
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        style={{ marginRight: "20px" }}
                    />
                    <TextField
                        className={classes.TextField}
                        id="outlined-read-only-input"
                        label="Last name"
                        value={data.lastname}
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        style={{ marginLeft: "20px" }}
                    />
                </div>

                <div>
                    <TextField
                        className={classes.TextField}
                        id="outlined-read-only-input"
                        label="Email"
                        value={data.email}
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        style={{ marginRight: "20px" }}
                    />
                    <TextField
                        className={classes.TextField}
                        id="outlined-read-only-input"
                        label="Phone"
                        value={data.phone}
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneAndroidIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={{ marginLeft: "20px" }}
                        variant="outlined"
                    />
                </div>

                <div>
                    <TextField
                        className={classes.TextField}
                        id="outlined-read-only-input"
                        label="Country"
                        value={data.country}
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PublicIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={{ marginRight: "20px" }}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.TextField}
                        id="outlined-read-only-input"
                        label="Currency"
                        value={data.currency}
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MarkunreadMailboxIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={{ marginLeft: "20px" }}
                        variant="outlined"
                    />
                </div>

                <div
                    class="left_bottom"
                    style={{ backgroundImage: `url(${Bg})` }}
                >
                    <p>ROYAL &nbsp;CORAL</p>

                    <hr />
                    <div>
                        <img src={Star} width="10px" height="10px" />
                        <img src={Star} width="10px" height="10px" />
                        <img src={Star} width="10px" height="10px" />
                        <img src={Star} width="10px" height="10px" />
                        <img src={Star} width="10px" height="10px" />
                    </div>

                    <img src={Service} />

                    <div>
                        <p>
                            Discovery Primea, 6749 Ayala Ave <br />
                            Makati 1226 Metro Manila
                        </p>
                        <div>
                            <div />
                            <p>
                                +66 843840477 <br />
                                theerapat.pice@mail.kmutt.ac.th
                            </p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </section>
    );
};

export default UserInfo;
