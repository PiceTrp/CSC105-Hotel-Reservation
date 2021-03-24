import DownArrow from "../pictures/EveryComponents/All_Icons/down-arrow.svg";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rooms from "../components/BookingRooms";

const Booking = () => {
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
                        <p>01 date and time</p>
                        <div></div>
                    </div>
                    <div class="room">
                        <p>02 Choose your room</p>
                        <div></div>
                    </div>
                    <div class="confirm">
                        <p>03 Confirmation</p>
                        <div></div>
                    </div>
                    <div class="status">
                        <p>04 Booking Status</p>
                        <div></div>
                    </div>
                </div>
            </div>

            <Rooms />
        </section>
    );
};

export default Booking;
