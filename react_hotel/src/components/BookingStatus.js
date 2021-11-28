import React, { useContext, useState } from "react";
import Correct from "../pictures/EveryComponents/All_Icons/correction.svg";
import Star from "../pictures/EveryComponents/All_Icons/star.png";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import moment from "moment";
import { DataContext } from "../context/DataContext";
import axios from "../utils/axios";
import qs from "qs";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
                Your Website<span>&nbsp;</span>
            </Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

const Booking_Status = () => {
    const { data, setData } = useContext(DataContext);

    const [rows, setRows] = useState([]);

    const priceMapper = {
        primea: 8900,
        executive: 9900,
        bussiness: 12900,
    };

    const price =
        priceMapper[data.roomtype] *
        data.amount *
        Math.floor((data.checkout - data.checkin) / 86400000);

    return (
        <section class="statusBox">
            <div class="status-wrapper">
                <img src={Correct} width="100px"></img>
                <div class="star">
                    <img src={Star} width="30px"></img>
                    <img src={Star} width="30px"></img>
                    <img src={Star} width="30px"></img>
                    <img src={Star} width="30px"></img>
                    <img src={Star} width="30px"></img>
                </div>
                <p>Booking Confirmed</p>
                <div>
                    <p>
                        We are pleased to inform you that your reservation
                        request has been recieved and confirm
                    </p>
                    <p>Your booking is confirmed. Thank you!</p>
                </div>
                <div>
                    <p>Booking Details</p>
                    <div>
                        <div
                            class="box-detail"
                            style={{
                                flex: "2.5",
                            }}
                        >
                            <p>Rooms</p>
                            <p>{data.booking.join(",")}</p>
                        </div>

                        <div class="line"></div>

                        <div
                            class="box-detail"
                            style={{
                                flex: "2",
                            }}
                        >
                            <p>Check-in</p>
                            <p>{new moment(data.checkin).format("LL")}</p>
                        </div>

                        <div class="line"></div>

                        <div
                            class="box-detail"
                            style={{
                                flex: "2",
                            }}
                        >
                            <p>Check-out</p>
                            <p>{new moment(data.checkout).format("LL")}</p>
                        </div>

                        <div class="line"></div>

                        <div
                            class="box-detail"
                            style={{
                                flex: "1",
                            }}
                        >
                            <p>Total</p>
                            <p>฿{price}</p>
                        </div>

                        <div class="line"></div>

                        <div
                            class="box-detail"
                            style={{
                                flex: "1",
                            }}
                        >
                            <p>Status</p>
                            <p>Confirmed</p>
                        </div>
                    </div>
                </div>
                <Copyright />
            </div>
        </section>
    );
};

export default Booking_Status;
