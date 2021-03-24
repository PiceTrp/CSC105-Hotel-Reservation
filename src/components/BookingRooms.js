import PicHotel from "../pictures/EveryComponents/Pics_rooms/Outdoors/Exclusive3_copy.jpg";
import LuxuryLine from "../pictures/EveryComponents/All_Icons/luxuryLine.png";
import img1_1 from "../pictures/Everypics_inweb/rooms/1/Primea_Suite_01.jpg";
import img1_2 from "../pictures/Everypics_inweb/rooms/1/Primea_Suite_02.jpg";
import img2_1 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/General_Rooms/Room2_02.jpg";
import img2_2 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/General_Rooms/Room1_02.jpg";
import img3_1 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/Exclusive_Rooms/Exclusive3.jpg";
import img3_2 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/Exclusive_Rooms/Exclusive3_02.jpg";
import crown from "../pictures/EveryComponents/All_Icons/crown.png";
import diamond from "../pictures/EveryComponents/All_Icons/diamond.png";
import Underline from "../pictures/EveryComponents/All_Icons/underline.png";
import Star from "../pictures/EveryComponents/All_Icons/star.png";
import MarbleTexture from "../pictures/Everypics_inweb/decoration/close-up-white-marble-texture-background.jpg";

const BookingRoom = () => {
    return (
        <div class="rooms">
            <div class="aboutHotel">
                <div style={{ backgroundImage: `url(${PicHotel})` }}></div>
                <div>
                    <p>Royal Coral</p>
                    <p>a luxury-exclusive hotel you ever experience</p>
                    <a href="/">explore the hotel</a>
                    <div>
                        <img src={Star} width="30px"></img>
                        <img src={Star} width="30px"></img>
                        <img src={Star} width="30px"></img>
                        <img src={Star} width="30px"></img>
                        <img src={Star} width="30px"></img>
                    </div>
                </div>
            </div>
            <div class="chooseRooms">
                <p>Choose your room</p>
                <div class="room1">
                    <div
                        style={{
                            backgroundImage: `url(${img1_1})`,
                            backgroundSize: "cover",
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${MarbleTexture})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <p>More detail</p>
                        </div>
                    </div>
                    <div class="room1_box">
                        {/*<div>
                            <img
                                src={LuxuryLine}
                                width="200px"
                                height="50px"
                            ></img>
                        </div>*/}
                        <img src={diamond} width="100px" height="100px"></img>
                        <p>Primea Suite</p>
                        <div></div>
                        <p>
                            The Primea Suite is the ideal choice for prolonged
                            stays with family and loved ones. The suite likewise
                            features a living room, fully-furnished kitchen, and
                            a dining area, perfect for enjoying meals in the
                            comfort of your own space.
                        </p>
                        <div>
                            <a href="" class="btn">
                                BOOK NOW
                            </a>
                        </div>
                    </div>
                </div>

                <div class="room1">
                    <div
                        style={{
                            backgroundImage: `url(${img2_1})`,
                            backgroundSize: "cover",
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${MarbleTexture})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <p>More detail</p>
                        </div>
                    </div>
                    <div class="room1_box">
                        <img src={diamond} width="100px" height="100px"></img>
                        <p>Executive Lofts</p>
                        <div></div>
                        <p>
                            Our spacious one bedroom Executive Lofts are a warm
                            and welcoming space, well appointed for all of our
                            long staying guests. The complete experience of our
                            Executive Lofts makes for a truly exciting living
                            experience at Royal Coral.
                        </p>
                        <div>
                            <a href="" class="btn">
                                BOOK NOW
                            </a>
                        </div>
                    </div>
                </div>

                <div class="room1">
                    <div
                        style={{
                            backgroundImage: `url(${img3_1})`,
                            backgroundSize: "cover",
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${MarbleTexture})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <p>More detail</p>
                        </div>
                    </div>
                    <div class="room1_box">
                        <img src={diamond} width="100px" height="100px"></img>
                        <p>Business Suite</p>
                        <div></div>
                        <p>
                            Discovery Primea’s spacious Business Suite allows
                            guests to enjoy a leisurely stay in the city.
                            Complimentary high-speed Internet access as well as
                            iPod and iPad docks provide connectivity and
                            productivity.
                        </p>
                        <div>
                            <a href="" class="btn">
                                BOOK NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingRoom;
