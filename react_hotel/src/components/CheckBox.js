import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { Phone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    formControl: {
        margin: theme.spacing(3),
        color: "grey",
    },
    FormControlLabel: {
        fontSize: "20px",
    },
}));

export default function CheckboxesGroup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        email: true,
    });

    const handleChange3 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { email, phone } = state;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={email}
                                onChange={handleChange3}
                                name="email"
                            />
                        }
                        label="I prefer to be contacted by email"
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}
