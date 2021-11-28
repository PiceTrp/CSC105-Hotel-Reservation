import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import pic_1 from "../pictures/Everypics_inweb/login/01.jpg";
import pic_3 from "../pictures/Everypics_inweb/login/03.jpg";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
    image: {
        backgroundImage: `url(${pic_3})`,
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: 120,
        width: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SignUp = () => {
    const classes = useStyles();
    const history = useHistory();

    const [title, setTitle] = React.useState("");
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [tick, setTick] = React.useState(false);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleRegister = async () => {
        const user = await axios.post(
            "http://localhost:8080/account/signup",
            qs.stringify({
                title: title,
                fname: firstname,
                lname: lastname,
                email: email,
                pass: password,
                phone: phone,
            })
        );
        if (user.data.success) {
            alert("Registeration success.");
            history.push("/login");
        } else {
            alert("Server error.");
        }
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                className={classes.image}
            ></Grid>
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AccountCircleRoundedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create an account
                    </Typography>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel id="demo-simple-select-outlined-label">
                            Title
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={title}
                            onChange={handleChange}
                            label="Title"
                        >
                            <MenuItem value={"Mr."}>Mr.</MenuItem>
                            <MenuItem value={"Mrs."}>Mrs.</MenuItem>
                            <MenuItem value={"Ms."}>Ms.</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="outlined-basic"
                        label="First name"
                        name="firstname"
                        autoFocus
                        onChange={(event) => {
                            setFirstname(event.target.value);
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Last name"
                        name="lastname"
                        autoFocus
                        onChange={(event) => {
                            setLastname(event.target.value);
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Phone"
                        name="phone"
                        autoFocus
                        onChange={(event) => {
                            setPhone(event.target.value);
                        }}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                onChange={(event) => {
                                    setTick(event.target.checked);
                                }}
                            />
                        }
                        label="I accept the terms and conditions"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleRegister}
                    >
                        Sign Up
                    </Button>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
};

export default SignUp;
