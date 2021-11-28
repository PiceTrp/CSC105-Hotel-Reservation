import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import HomeIcon from "@material-ui/icons/Home";

import { DataContext } from "../context/DataContext";
import axios from "../utils/axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

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
    TextField2: {
        width: "450px",
        marginTop: "20px",
    },
}));

const UserSetting = () => {
    const classes = useStyles();
    const history = useHistory();
    const { data, setData } = useContext(DataContext);

    const [title, setTitle] = React.useState(data.nametitle);
    const [firstname, setFirstname] = React.useState(data.firstname);
    const [lastname, setLastname] = React.useState(data.lastname);
    const [email, setEmail] = React.useState(data.email);
    const [phone, setPhone] = React.useState(data.phone);
    const [country, setCountry] = React.useState(data.country);
    const [currency, setCurrency] = React.useState(data.currency);

    const [password, setPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmPass, setConfirmPass] = React.useState("");

    const handleSetting = async () => {
        const user = await axios.post(
            "http://localhost:8080/account/setting",
            qs.stringify({
                title: title,
                fname: firstname,
                lname: lastname,
                email: email,
                phone: phone,
                country: country,
                currency: currency,
            })
        );
        if (user.data.update) {
            alert("Change success");
            //history.push("/myAccount");
        } else {
            alert("Server error.");
        }
    };

    const handlePassword = async () => {
        const user = await axios.post(
            "http://localhost:8080/account/password",
            qs.stringify({
                oldPass: password,
                newPass: newPassword,
            })
        );
        if (user.data.success) {
            if (user.data.update) {
                alert("Password is successfully changed.");
                window.location.reload();
            } else {
                alert("Your old password is incorrect.");
            }
        } else {
            alert("Server error.");
        }
    };

    return (
        <section class="user-setting">
            <div class="user-setting-container">
                <div class="header">
                    <div></div>
                    <p>Setting Information</p>
                    <div></div>
                </div>

                <div>
                    <TextField
                        className={classes.TextField}
                        id="outlined-required"
                        label="First name"
                        defaultValue={data.firstname}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        onChange={(event) => {
                            setFirstname(event.target.value);
                        }}
                        style={{ marginRight: "20px" }}
                    />
                    <TextField
                        className={classes.TextField}
                        id="outlined-required"
                        label="Last name"
                        defaultValue={data.lastname}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        onChange={(event) => {
                            setLastname(event.target.value);
                        }}
                        style={{ marginLeft: "20px" }}
                    />
                </div>

                <div>
                    <TextField
                        className={classes.TextField}
                        id="outlined-required"
                        label="Email"
                        defaultValue={data.email}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        style={{ marginRight: "20px" }}
                    />
                    <TextField
                        className={classes.TextField}
                        id="outlined-required"
                        label="Phone"
                        defaultValue={data.phone}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneAndroidIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={{ marginLeft: "20px" }}
                        variant="outlined"
                        onChange={(event) => {
                            setPhone(event.target.value);
                        }}
                    />
                </div>

                <div>
                    <TextField
                        className={classes.TextField}
                        id="outlined-required"
                        label="Country"
                        defaultValue={data.country}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneAndroidIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={{ marginRight: "20px" }}
                        variant="outlined"
                        onChange={(event) => {
                            setCountry(event.target.value);
                        }}
                    />
                    <TextField
                        className={classes.TextField}
                        id="outlined-required"
                        label="Currency ($/฿/...)"
                        defaultValue={data.currency}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneAndroidIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={{ marginLeft: "20px" }}
                        variant="outlined"
                        onChange={(event) => {
                            setCurrency(event.target.value);
                        }}
                    />
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "30px", marginBottom: "30px" }}
                    onClick={handleSetting}
                >
                    Save Change
                </Button>

                <div class="header">
                    <div></div>
                    <p>Setting Password</p>
                    <div></div>
                </div>

                <TextField
                    className={classes.TextField2}
                    id="outlined-password-input"
                    label="Your Old Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <TextField
                    className={classes.TextField2}
                    id="outlined-password-input"
                    label="New Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={(event) => {
                        setNewPassword(event.target.value);
                    }}
                />
                <TextField
                    className={classes.TextField2}
                    id="outlined-password-input"
                    label="New Password Again"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={(event) => {
                        setConfirmPass(event.target.value);
                    }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "30px", marginBottom: "70px" }}
                    onClick={handlePassword}
                >
                    Save Password
                </Button>
            </div>
        </section>
    );
};

export default UserSetting;
