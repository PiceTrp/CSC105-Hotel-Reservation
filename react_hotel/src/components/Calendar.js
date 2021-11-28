import "date-fns";
import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { DataContext } from "../context/DataContext";

export default function Calendar({ check }) {
    // The first commit of Material-UI
    const { data, setData } = useContext(DataContext);

    const handleDateChange = (date) => {
        setData({
            ...data,
            [check]: date,
        });
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="dense"
                    id="date-picker-inline"
                    value={data[check]}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        "aria-label": "change date",
                    }}
                    style={{
                        color: "white",
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}
