import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    Fab: {
        width: "35px",
        height: "20px",
    },
}));

const Counter = () => {
    const classes = useStyles();

    const [number, setNumber] = React.useState(0);

    const increase_number = () => {
        if (number < 3) {
            setNumber(number + 1);
        }
    };

    const decrease_number = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };

    return (
        <section class="counter">
            <div class="counter-container">
                <p>Amount of rooms</p>
                <div>
                    <div className={classes.root}>
                        <Fab
                            className={classes.Fab}
                            color="secondary"
                            aria-label="add"
                            onClick={increase_number}
                        >
                            <AddIcon />
                        </Fab>
                    </div>

                    <p>{number}</p>

                    <div className={classes.root}>
                        <Fab
                            className={classes.Fab}
                            color="secondary"
                            aria-label="minus"
                            onClick={decrease_number}
                        >
                            <RemoveIcon />
                        </Fab>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;
