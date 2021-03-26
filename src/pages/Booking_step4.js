import DownArrow from "../pictures/EveryComponents/All_Icons/down-arrow.svg";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Status from "../components/BookingStatus";
import Correct from "../pictures/EveryComponents/All_Icons/check.svg";
import Circle from "../pictures/EveryComponents/All_Icons/oval.svg";

const Booking_room = () => {
    return (
        <section id="booking">
            <div class="nav">
                <p>Royal Coral</p>
                <div class="right">
                    <div>
                        <p>Book online or call</p>
                        <p>+88 84 384 0477</p>
                    </div>
                    <div class="vertical-line"></div>
                    <div>
                        <div>
                            <p>Sign-in</p>
                            <p>Create an account</p>
                        </div>
                        <a href="/login">
                            {/*<img
                                    src={DownArrow}
                                    width="10px"
                                    height="10px"
                                />*/}
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                style={{
                                    color: "white",
                                    alignSelf: "center",
                                    marginLeft: "13px",
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="head">
                    <div class="date">
                        <p>01 date / information</p>
                        <div>
                            <p>
                                Step <span>1</span>
                            </p>
                            <img src={Correct} width="40px" height="40px"></img>
                        </div>
                    </div>
                    <div class="room">
                        <p>02 Choose your room</p>
                        <div>
                            <p>
                                Step <span>11</span>
                            </p>
                            <img src={Correct} width="40px" height="40px"></img>
                        </div>
                    </div>
                    <div class="confirm">
                        <p>03 Confirmation</p>
                        <div>
                            <p>
                                Step <span>111</span>
                            </p>
                            <img src={Correct} width="40px" height="40px"></img>
                        </div>
                    </div>
                    <div class="status">
                        <p>04 Booking Status</p>
                        <div>
                            <p>
                                Step <span>IV</span>
                            </p>
                            <img src={Correct} width="40px" height="40px"></img>
                        </div>
                    </div>
                </div>
            </div>

            <Status />
        </section>
    );
};

export default Booking_room;
