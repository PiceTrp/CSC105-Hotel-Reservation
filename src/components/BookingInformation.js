import React from "react";
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

const currencies = [
    {
        value: "USD",
        label: "$",
    },
    {
        value: "EUR",
        label: "€",
    },
    {
        value: "BTC",
        label: "฿",
    },
    {
        value: "JPY",
        label: "¥",
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
    const [title, setTitle] = React.useState("");
    const [people, setPeople] = React.useState("");
    const [currency, setCurrency] = React.useState("BTC");
    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2014-08-18T21:11:54")
    );

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleChange2 = (event) => {
        setCurrency(event.target.value);
    };

    const handleChange_people = (event) => {
        setPeople(event.target.value);
    };

    const handleDateChange_date = (date) => {
        setSelectedDate(date);
    };

    return (
        <section class="information">
            <div class="container-information">
                <div></div>
                <p>Personal Information</p>
                <div></div>
                <div class="information-wrapper">
                    <div class="information-content">
                        <p class="contact-text">Your Information</p>
                        <FormControl
                            className={classes.formControl}
                            style={{
                                width: "100px",
                            }}
                        >
                            <InputLabel id="demo-simple-select-label">
                                Name title
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={title}
                                onChange={handleChange}
                            >
                                <MenuItem value={"Mr."}>Mr.</MenuItem>
                                <MenuItem value={"Mrs."}>Mrs.</MenuItem>
                                <MenuItem value={"Ms."}>Ms.</MenuItem>
                            </Select>
                        </FormControl>

                        <div>
                            <TextField
                                className={classes.TextField}
                                id="standard-search"
                                label="First name"
                                type="search"
                                style={{
                                    marginRight: "30px",
                                    marginLeft: "8px",
                                }}
                            />
                            <TextField
                                className={classes.TextField}
                                id="standard-search"
                                label="Last name"
                                type="search"
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
                        />

                        <TextField
                            className={classes.TextField}
                            id="standard-search"
                            label="Phone"
                            type="search"
                            helperText="xxx-xxx-xxxx"
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
                                    value={title}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Thailand"}>
                                        Thailand
                                    </MenuItem>
                                    <MenuItem value={"Thailand"}>
                                        Thailand
                                    </MenuItem>
                                    <MenuItem value={"Thailand"}>
                                        Thailand
                                    </MenuItem>
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
                                    value={currency}
                                    onChange={handleChange2}
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
                                    width: "250px",
                                }}
                            >
                                <InputLabel id="demo-simple-select-label">
                                    Number of guests
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={people}
                                    onChange={handleChange_people}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
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
                                        label="Date picker dialog"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange_date}
                                        KeyboardButtonProps={{
                                            "aria-label": "change date",
                                        }}
                                    />
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange_date}
                                        KeyboardButtonProps={{
                                            "aria-label": "change date",
                                        }}
                                    />
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        label="Time picker"
                                        value={selectedDate}
                                        onChange={handleDateChange_date}
                                        KeyboardButtonProps={{
                                            "aria-label": "change time",
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
                            <a href="/booking">
                                <Button
                                    variant="outlined"
                                    style={{
                                        width: "100px",
                                    }}
                                >
                                    Edit
                                </Button>
                            </a>
                            <a href="/booking/rooms">
                                <Button
                                    variant="outlined"
                                    style={{
                                        width: "100px",
                                    }}
                                >
                                    Summit
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Information;
