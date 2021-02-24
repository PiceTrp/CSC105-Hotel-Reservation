import { Parallax } from 'react-parallax';
import Flower from "../pictures/EveryComponents/All_Icons/flower_gold.png";
import FlowerRight from "../pictures/EveryComponents/All_Icons/flower_gold_right.png";
import img1_1 from "../pictures/Everypics_inweb/rooms/1/Primea_Suite_01.jpg";
import img1_2 from "../pictures/Everypics_inweb/rooms/1/Primea_Suite_02.jpg";
import img2_1 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/General_Rooms/Room2_01.jpg";
import img2_2 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/General_Rooms/Room2_02.jpg";
import img3_1 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/Exclusive_Rooms/Exclusive3.jpg";
import img3_2 from "../pictures/EveryComponents/Pics_rooms/Private_rooms/Exclusive_Rooms/Exclusive3_02.jpg";


const Rooms = () => {
    return (
        <section id="rooms">
            <div class="container">

                <div class="head">

                    <img src={Flower} width="150px" height="150px" />
                    <div>
                        <p>
                            ROOM & SUITE
                        </p>
                        <div>

                        </div>
                    </div>
                    <img src={FlowerRight} width="150px" height="150px" />

                </div>

                <div class="pic_room">
                    <Parallax bgImage={img1_1} bgImageAlt="Rooms" strength={150} className="parallax">
                        <div class="inside">
                            <p>
                                Primea Suite
                            </p>
                            <p>
                                the ideal choice for prolonged stays with family and loved ones.
                            </p>
                        </div>
                    </Parallax>
                    <Parallax className="parallax" bgImage={img1_2} bgImageAlt="Rooms" strength={150}>
                        <div class="inside">
                            <p>
                                Primea Suite
                            </p>
                            <p>
                                the ideal choice for prolonged stays with family and loved ones.
                            </p>
                        </div>
                    </Parallax>
                </div>
                <div class="pic_room">
                    <Parallax className="parallax" bgImage={img2_1} bgImageAlt="Rooms" strength={150}>
                        <div class="inside">
                            <p>
                                Primea Suite
                            </p>
                            <p>
                                the ideal choice for prolonged stays with family and loved ones.
                            </p>
                        </div>
                    </Parallax>
                    <Parallax className="parallax" bgImage={img2_2} bgImageAlt="Rooms" strength={150}>
                        <div class="inside">
                            <p>
                                Primea Suite
                            </p>
                            <p>
                                the ideal choice for prolonged stays with family and loved ones.
                            </p>
                        </div>
                    </Parallax>
                </div>
                <div class="pic_room">
                    <Parallax className="parallax" bgImage={img3_1} bgImageAlt="Rooms" strength={150}>
                        <div class="inside">
                            <p>
                                Primea Suite
                            </p>
                            <p>
                                the ideal choice for prolonged stays with family and loved ones.
                            </p>
                        </div>
                    </Parallax>
                    <Parallax className="parallax" bgImage={img3_2} bgImageAlt="Rooms" strength={150}>
                        <div class="inside">
                            <p>
                                Primea Suite
                            </p>
                            <p>
                                the ideal choice for prolonged stays with family and loved ones.
                            </p>
                        </div>
                    </Parallax>
                </div>

            </div>
        </section>
    );
}

export default Rooms;