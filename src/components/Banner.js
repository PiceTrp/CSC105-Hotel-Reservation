import {
    faCalendarAlt,
    faCrow,
    faCrown,
    faGem,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Calendar from "./Calendar";

const Banner = () => {
    const [icon, setIcon] = useState(0);
    return (
        <section id="banner">
            <div class="overlay"></div>

            <h1>
                {" "}
                A LUXURY EXCLUSIVE HOTEL <br /> YOU DESERVE
            </h1>

            <div id="bookingtable">
                <div class="bbb">
                    ARRIVAL
                    <div class="date-selector">
                        <Calendar />
                        {/* <p>24 Aug 2021</p>
                        <FontAwesomeIcon icon={faCalendarAlt} /> */}
                    </div>
                </div>

                <div class="bbb">
                    DEPARTURE
                    <div class="date-selector">
                        <Calendar />
                    </div>
                </div>

                <div class="bbb">
                    TYPE
                    <div class="type-selector">
                        <div
                            style={{
                                backgroundColor:
                                    icon == 1 ? "white" : "transparent",
                                color: icon == 1 ? "black" : "white",
                                cursor: "pointer",
                            }}
                            onClick={() => setIcon(1)}
                        >
                            <FontAwesomeIcon icon={faGem} />
                        </div>
                        <div
                            style={{
                                backgroundColor:
                                    icon == 2 ? "white" : "transparent",
                                color: icon == 2 ? "black" : "white",
                                cursor: "pointer",
                            }}
                            onClick={() => setIcon(2)}
                        >
                            <FontAwesomeIcon icon={faCrown} />
                        </div>
                    </div>
                </div>

                <div class="bbb">
                    PEOPLE
                    <div class="number-selector">
                        <input type="number" />
                    </div>
                </div>

                <div class="bbb" id="box">
                    <a href="/booking" class="book">
                        <p class="book-hover">BOOK NOW</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;
