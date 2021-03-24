import React from "react";
import ReactDOM from "react-dom";

import NumberPicker from "react-number-picker";

import "react-number-picker/dist/style.css";

const Wrapper = class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1.99,
        };
    }

    handleChange(new_value) {
        console.log("new value", new_value);
        this.setState({ value: new_value });
    }

    render() {
        return (
            <NumberPicker
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
};

export default Wrapper;
