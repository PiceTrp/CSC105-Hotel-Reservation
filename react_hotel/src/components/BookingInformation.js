import React, { useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CheckBox from "./CheckBox";
import Button from "@material-ui/core/Button";

import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { Directions } from "@material-ui/icons";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

const currencies = [
    {
        value: "$",
        label: "$",
    },
    {
        value: "฿",
        label: "฿",
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "200px",
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    TextField: {
        width: "250px",
        marginTop: "10px",
        marginBottom: "10px",
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}));

const Information = () => {
    const classes = useStyles();
    const [country, setCountry] = React.useState("Thailand");
    const [currency, setCurrency] = React.useState("฿");
    const { data, setData } = useContext(DataContext);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);

    return (
        <section class="information">
            <div class="container-information">
                <div></div>
                <p>Personal Information</p>
                <div></div>
                <div class="information-wrapper">
                    <div class="information-content">
                        <p class="contact-text">Your Information</p>

                        <TextField
                            className={classes.TextField}
                            label="Name title"
                            style={{
                                marginRight: "30px",
                                marginLeft: "8px",
                                marginTop: "12px",
                            }}
                            value={data.nametitle}
                        />
                        <div>
                            <TextField
                                className={classes.TextField}
                                id="standard-search"
                                label="First name"
                                style={{
                                    marginRight: "30px",
                                    marginLeft: "8px",
                                }}
                                value={data.firstname}
                            />
                            <TextField
                                className={classes.TextField}
                                id="standard-search"
                                label="Last name"
                                value={data.lastname}
                            />
                        </div>

                        <TextField
                            className={classes.TextField}
                            id="email"
                            label="Email address"
                            type="email"
                            style={{
                                marginLeft: "8px",
                                marginRight: "30px",
                            }}
                            value={data.email}
                        />

                        <TextField
                            className={classes.TextField}
                            id="standard-search"
                            label="Phone"
                            type="search"
                            helperText="xxx-xxx-xxxx"
                            value={data.phone}
                        />

                        <div class="country-currency-box">
                            <FormControl
                                className={classes.formControl}
                                style={{
                                    width: "250px",
                                    marginRight: "23px",
                                }}
                            >
                                <InputLabel id="demo-simple-select-label">
                                    Country
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={data.country}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            country: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value="TH">Thailand</MenuItem>
                                    <MenuItem value="AR">Arendelle</MenuItem>
                                </Select>
                            </FormControl>
                            <form
                                className={classes.root}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select"
                                    value={data.currency}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            currency: e.target.value,
                                        })
                                    }
                                    helperText="Please select your currency"
                                >
                                    {currencies.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </form>
                        </div>

                        <div class="bookingInformation">
                            <p class="contact-text">Booking Information</p>
                            <FormControl
                                className={classes.formControl}
                                style={{
                                    width: "200px",
                                    marginTop: "20px",
                                }}
                            >
                                <InputLabel id="demo-simple-select-label">
                                    Amount of rooms
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={data.amount}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            amount: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid
                                    container
                                    justify="space-around"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginLeft: "8px",
                                    }}
                                >
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Check-in date"
                                        format="MM/dd/yyyy"
                                        value={data.checkin}
                                        onChange={(date) =>
                                            setData({ ...data, checkin: date })
                                        }
                                        KeyboardButtonProps={{
                                            "aria-label": "change date",
                                        }}
                                    />
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Check-out date"
                                        format="MM/dd/yyyy"
                                        value={data.checkout}
                                        onChange={(date) =>
                                            setData({ ...data, checkout: date })
                                        }
                                        KeyboardButtonProps={{
                                            "aria-label": "change date",
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>

                        <div>
                            <p class="contact-text">Contact preference</p>
                            <CheckBox />
                        </div>

                        <div>
                            <Link to="/">
                                <Button
                                    variant="outlined"
                                    style={{
                                        width: "100px",
                                    }}
                                >
                                    Back
                                </Button>
                            </Link>
                            <Link to="/booking/rooms">
                                <Button
                                    variant="outlined"
                                    style={{
                                        width: "100px",
                                    }}
                                >
                                    Submit
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Information;
