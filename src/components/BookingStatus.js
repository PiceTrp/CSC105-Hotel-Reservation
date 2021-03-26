import React from "react";
import Correct from "../pictures/EveryComponents/All_Icons/correction.svg";
import Star from "../pictures/EveryComponents/All_Icons/star.png";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const Booking_Status = () => {
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
                                flex: "1.3",
                            }}
                        >
                            <p>Booking NO:</p>
                            <p>SMLSDVS</p>
                        </div>

                        <div class="line"></div>

                        <div
                            class="box-detail"
                            style={{
                                flex: "2",
                            }}
                        >
                            <p>Arrival:</p>
                            <p>March 26, 2021</p>
                        </div>

                        <div class="line"></div>

                        <div
                            class="box-detail"
                            style={{
                                flex: "2",
                            }}
                        >
                            <p>Departure:</p>
                            <p>March 30, 2021</p>
                        </div>

                        <div class="line"></div>

                        <div
                            class="box-detail"
                            style={{
                                flex: "1",
                            }}
                        >
                            <p>Total:</p>
                            <p>฿ 8900</p>
                        </div>

                        <div class="line"></div>

                        <div
                            class="box-detail"
                            style={{
                                flex: "1",
                            }}
                        >
                            <p>Status:</p>
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
