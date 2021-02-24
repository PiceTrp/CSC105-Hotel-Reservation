import Swim from "../pictures/EveryComponents/Pics_Service/makati-luxury-hotel-1500x835.jpg";
import Spa from "../pictures/EveryComponents/Pics_Service/Spa-1024x683.jpg";
import Gym from "../pictures/EveryComponents/Pics_Service/Facilities_03.jpg";
import Dinner from "../pictures/EveryComponents/Pics_Service/Dinner_big.png";
import Gorgeous_circle from "../pictures/EveryComponents/All_Icons/circle_gorgeous.png";

const Service = () => {
    return (
        <section id="service">
            <div class="container-wrapper">
                <div class="container">

                    <div class="left">
                        <div class="box">
                            <div class="line">

                            </div>
                            <div>
                                <div class="img-wrapper">
                                    <img src={Swim} width="280px" height="180px" />
                                </div>

                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="line">

                            </div>
                            <div>
                                <div class="img-wrapper">
                                    <img src={Spa} width="280px" height="180px" />
                                </div>

                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="line">

                            </div>
                            <div>
                                <div class="img-wrapper">
                                    <img src={Gym} width="280px" height="180px" />
                                </div>

                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="large-pic">
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                        <img src={Gorgeous_circle} />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Service;