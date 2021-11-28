import {
    faCalendarAlt,
    faCrow,
    faCrown,
    faGem,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { forwardRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useHistory } from "react-router-dom";
import Calendar from "./Calendar";

const Banner = (props, ref) => {
    const [icon, setIcon] = useState(0);
    const { data, setData } = useContext(DataContext);

    const history = useHistory();

    const book = () => {
        if (data.loggedin) {
            history.push("/booking");
        } else {
            alert("Please login first");
        }
    };
    return (
        <section id="banner" ref={ref}>
            <div class="overlay"></div>

            <h1>
                A LUXURY EXCLUSIVE HOTEL <br /> YOU DESERVE
            </h1>

            <div id="bookingtable">
                <div class="bbb">
                    ARRIVAL
                    <div class="date-selector">
                        <Calendar check="checkin" />
                        {/* <p>24 Aug 2021</p>
                        <FontAwesomeIcon icon={faCalendarAlt} /> */}
                    </div>
                </div>

                <div class="bbb">
                    DEPARTURE
                    <div class="date-selector">
                        <Calendar check="checkout" />
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
                    AMOUNT
                    <div class="number-selector">
                        <input
                            type="number"
                            value={data.amount}
                            min="1"
                            max="3"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    amount: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>

                <div class="bbb" id="box">
                    <Link class="book" onClick={book}>
                        <p class="book-hover">BOOK NOW</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default forwardRef(Banner);
