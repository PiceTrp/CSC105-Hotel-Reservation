import { Parallax } from "react-parallax";
import Flower from "../pictures/EveryComponents/All_Icons/flower_gold.png";
import FlowerRight from "../pictures/EveryComponents/All_Icons/flower_gold_right.png";
import img1_1 from "../pictures/Everypics_inweb/rooms/1/Primea_Suite_01.jpg";
import img1_2 from "../pictures/Everypics_inweb/rooms/1/Primea_Suite_02.jpg";
import img2_1 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/General_Rooms/Room2_02.jpg";
import img2_2 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/General_Rooms/Room1_02.jpg";
import img3_1 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/Exclusive_Rooms/Exclusive3.jpg";
import img3_2 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/Exclusive_Rooms/Exclusive3_02.jpg";
import crown from "../pictures/EveryComponents/All_Icons/crown.png";
import diamond from "../pictures/EveryComponents/All_Icons/diamond.png";
import star from "../pictures/EveryComponents/All_Icons/star.png";
import PicRoomItem from "./PicRoomItem";

const Rooms = () => {
    return (
        <section id="rooms">
            <div class="container">
                <div class="head">
                    <img src={Flower} width="150px" height="150px" />
                    <div>
                        <p>ROOM & SUITE</p>
                        <div></div>
                    </div>
                    <img src={FlowerRight} width="150px" height="150px" />
                </div>

                <div class="pic_room">
                    <PicRoomItem
                        roomType={diamond}
                        roomName="Primea"
                        roomName2="Suite"
                        img={img1_1}
                        modal_img_01={img1_1}
                        modal_img_02={img1_2}
                        title="Primea Suite"
                        desc="the ideal choice for prolonged stays with family
                    and loved ones."
                    />
                    <PicRoomItem
                        roomType={diamond}
                        roomName="Primea"
                        roomName2="Suite"
                        img={img1_2}
                        modal_img_01={img1_1}
                        modal_img_02={img1_2}
                        img={img1_2}
                        title="Primea Suite"
                        desc="the ideal choice for prolonged stays with family
                    and loved ones."
                    />
                </div>
                <div class="pic_room">
                    <PicRoomItem
                        roomType={diamond}
                        roomName="Executive"
                        roomName2="Loft"
                        modal_img_01={img2_1}
                        modal_img_02={img2_2}
                        img={img2_1}
                        title="Executive Loft"
                        desc="the ideal choice for prolonged stays with family
                    and loved ones."
                    />
                    <PicRoomItem
                        roomType={diamond}
                        roomName="Executive"
                        roomName2="Loft"
                        modal_img_01={img2_1}
                        modal_img_02={img2_2}
                        img={img2_2}
                        title="Executive Loft"
                        desc="the ideal choice for prolonged stays with family
                    and loved ones."
                    />
                </div>
                <div class="pic_room">
                    <PicRoomItem
                        roomType={crown}
                        roomName="Business"
                        roomName2="Suite"
                        modal_img_01={img3_1}
                        modal_img_02={img3_2}
                        img={img3_1}
                        title="Business Suite"
                        desc="the ideal choice for prolonged stays with family
                    and loved ones."
                    />
                    <PicRoomItem
                        roomType={crown}
                        roomName="Business"
                        roomName2="Suite"
                        modal_img_01={img3_1}
                        modal_img_02={img3_2}
                        img={img3_2}
                        title="Business Suite"
                        desc="the ideal choice for prolonged stays with family
                    and loved ones."
                    />
                </div>
            </div>
        </section>
    );
};

export default Rooms;
