import React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import img1_1 from "../pictures/Everypics_inweb/rooms/1/Primea_Suite_01.jpg";
import img1_2 from "../pictures/Everypics_inweb/rooms/1/Primea_Suite_02.jpg";
import img2_1 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/General_Rooms/Room2_02.jpg";
import img2_2 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/General_Rooms/Room1_02.jpg";
import img3_1 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/Exclusive_Rooms/Exclusive3.jpg";
import img3_2 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/Exclusive_Rooms/Exclusive3_02.jpg";
import crown from "../pictures/EveryComponents/All_Icons/crown.png";
import diamond from "../pictures/EveryComponents/All_Icons/diamond.png";
import Bg from "../pictures/Everypics_inweb/decoration/2749701.jpg";

const Booking_Confirmation = () => {
    return (
        <section class="confirmation">
            <div class="confirmation-wrapper">
                <div class="container-confirmation">
                    <p>Reservation Confirmation</p>
                    <p>We are pleased to confirm your reservation as below:</p>
                    <img src={img1_1} width="550px"></img>
                    <div class="room">
                        <div>
                            <p>Your room</p>
                            <p>The Primea Suite</p>
                            <p>
                                the ideal choice for prolonged stays with family
                                and loved ones.
                            </p>
                        </div>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                        />
                    </div>
                    <div class="line"></div>

                    <div class="date">
                        <div>
                            <p>Friday,</p>
                            <p>March 26, 2021</p>
                            <p>Check in Anytime after</p>
                            <p>3PM</p>
                        </div>
                        <div>
                            <p>Tuesday,</p>
                            <p>March 30, 2021</p>
                            <p>Check out</p>
                            <p>11AM</p>
                        </div>
                    </div>

                    <div class="line"></div>

                    <div class="address">
                        <div>
                            <p>Address</p>
                            <p>126 Pracha Uthit Rd, Bang Mot, Thung Khru,</p>
                            <p>Bangkok 10140, Thailand</p>
                        </div>
                        <div>Get Directions</div>
                    </div>

                    <div class="line"></div>

                    <div class="guest">
                        <p>Guest</p>
                        <p>2</p>
                    </div>

                    <div class="line"></div>

                    <div class="payment">
                        <div>
                            <p>Amount</p>
                            <p>฿ 8900</p>
                        </div>
                        <div>View Reciept</div>
                    </div>

                    <div class="line"></div>

                    <div class="reserveCode">
                        <p>Reservation code</p>
                        <p>SMLSDVS</p>
                    </div>

                    <div class="line"></div>

                    <div class="last">
                        <a href="/booking">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    width: "300px",
                                    height: "50px",
                                    marginBottom: "20px",
                                }}
                            >
                                Change Your reservation
                            </Button>
                        </a>

                        <a href="/booking/rooms/confirmation/status">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    width: "300px",
                                    height: "50px",
                                }}
                            >
                                Confirm
                            </Button>
                        </a>
                    </div>

                    {/*<div>
                        <div class="reservation-detail">
                            <p>Reservation detail</p>
                            <div></div>
                            <div>
                                <div class="left-reserve"></div>
                                <div class="right-reserve"></div>
                            </div>
                        </div>
                        <div class="policies">55</div>
                    </div>*/}
                </div>
            </div>
        </section>
    );
};

export default Booking_Confirmation;
