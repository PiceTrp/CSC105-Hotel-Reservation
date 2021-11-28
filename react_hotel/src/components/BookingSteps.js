import Correct from "../pictures/EveryComponents/All_Icons/check.svg";
import Circle from "../pictures/EveryComponents/All_Icons/oval.svg";

const BookingSteps = (props) => {
    return (
        <div class="container">
            <div class="head">
                <div class="date">
                    <p>01 date / information</p>
                    <div>
                        <p>
                            Step <span>1</span>
                        </p>
                        <img
                            src={props.circle1}
                            width="40px"
                            height="40px"
                        ></img>
                    </div>
                </div>
                <div class="room">
                    <p>02 Choose your room</p>
                    <div>
                        <p>
                            Step <span>11</span>
                        </p>
                        <img
                            src={props.circle2}
                            width="40px"
                            height="40px"
                        ></img>
                    </div>
                </div>
                <div class="confirm">
                    <p>03 Confirmation</p>
                    <div>
                        <p>
                            Step <span>111</span>
                        </p>
                        <img
                            src={props.circle3}
                            width="40px"
                            height="40px"
                        ></img>
                    </div>
                </div>
                <div class="status">
                    <p>04 Booking Status</p>
                    <div>
                        <p>
                            Step <span>IV</span>
                        </p>
                        <img
                            src={props.circle4}
                            width="40px"
                            height="40px"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingSteps;
