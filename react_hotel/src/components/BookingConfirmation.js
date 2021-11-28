import React, { useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import img1_1 from "../pictures/Everypics_inweb/rooms/1/Primea_Suite_01.jpg";
import img2_1 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/General_Rooms/Room2_02.jpg";
import img3_1 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/Exclusive_Rooms/Exclusive3.jpg";
import crown from "../pictures/EveryComponents/All_Icons/crown.png";
import diamond from "../pictures/EveryComponents/All_Icons/diamond.png";
import { DataContext } from "../context/DataContext";
import moment from "moment";
import axios from "../utils/axios";
import qs from "qs";
import { Link, useHistory } from "react-router-dom";

const imgMapper = {
    primea: img1_1,
    executive: img2_1,
    business: img3_1,
};

const nameMapper = {
    primea: "The Primea Suite",
    executive: "The Executive Loft",
    business: "The Business Suite",
};

const priceMapper = {
    primea: 8900,
    executive: 9900,
    business: 12900,
};

const Booking_Confirmation = () => {
    const router = useHistory();
    const { data, setData } = useContext(DataContext);

    const price =
        priceMapper[data.roomtype] *
        data.amount *
        Math.floor((data.checkout - data.checkin) / 86400000);

    const book = () => {
        axios
            .post(
                "http://localhost:8080/booking",
                qs.stringify({
                    noRoom: data.amount,
                    checkin: data.checkin.getTime(),
                    checkout: data.checkout.getTime(),
                    roomType: data.roomtype,
                    price: price,
                })
            )
            .then((response) => {
                if (response.data.success) {
                    setData({ ...data, booking: response.data.rooms });
                    router.push("/booking/rooms/confirmation/status");
                } else {
                    alert(response.data.text);
                }
            });
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);

    return (
        <section class="confirmation">
            <div class="confirmation-wrapper">
                <div class="container-confirmation">
                    <p>Reservation Confirmation</p>
                    <p>We are pleased to confirm your reservation as below:</p>
                    <img src={imgMapper[data.roomtype]} width="550px"></img>
                    <div class="room">
                        <div>
                            <p>Your room</p>
                            <p>{nameMapper[data.roomtype]}</p>
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
                            <p>{new moment(data.checkin).format("dddd,")}</p>
                            <p>{new moment(data.checkin).format("LL")}</p>
                            <p>Check in Anytime after</p>
                            <p>12AM</p>
                        </div>
                        <div>
                            <p>{new moment(data.checkout).format("dddd,")}</p>
                            <p>{new moment(data.checkout).format("LL")}</p>
                            <p>Check out before</p>
                            <p>10AM</p>
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
                        <p>Amount of room</p>
                        <p>{data.amount}</p>
                    </div>

                    <div class="line"></div>

                    <div class="payment">
                        <div>
                            <p>Price</p>
                            <p>฿{price}</p>
                        </div>
                        <div>View Reciept</div>
                    </div>

                    <div class="line"></div>

                    <div class="line"></div>

                    <div class="last">
                        <Link to="/booking">
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
                        </Link>

                        <Button
                            variant="contained"
                            color="primary"
                            style={{
                                width: "300px",
                                height: "50px",
                            }}
                            onClick={book}
                        >
                            Confirm
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking_Confirmation;
