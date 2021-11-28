import View from "../pictures/EveryComponents/Pics_rooms/Outdoors/best-hotel-in-makati-1500x835.jpg";
import Star from "../pictures/EveryComponents/All_Icons/star.png";
import Service from "../pictures/EveryComponents/All_Icons/service.png";
import Googlemap from "../pictures/EveryComponents/All_Icons/google-maps.png";


const Map = () => {
    return (
        <section id="map">
            <div class="container-wrapper">
                <div class="container">

                    <div class="left">

                        <div class="left_top">
                            <img src={View} width="650px" height="300px" />
                        </div>

                        <div class="left_bottom">

                            <div class="logo">

                            </div>
                            <p>
                                ROYAL CORAL
                            </p>

                            <hr />

                            <div>
                                <img src={Star} width="10px" height="10px" />
                                <img src={Star} width="10px" height="10px" />
                                <img src={Star} width="10px" height="10px" />
                                <img src={Star} width="10px" height="10px" />
                                <img src={Star} width="10px" height="10px" />
                            </div>

                            <img src={Service} />

                            <div>
                                <p>
                                    Discovery Primea, 6749 Ayala Ave <br />
                                Makati 1226 Metro Manila
                                </p>
                                <div>
                                    <div />
                                </div>
                                <p>
                                    +66 843840477 <br />
                                    theerapat.pice@mail.kmutt.ac.th
                                </p>
                            </div>

                        </div>
                        <hr />

                    </div>

                    <div class="right">
                        <div>
                            <p>
                                Come Discover The Royal Coral <br />
                                the most exclusive hotel you ever met
                            </p>
                            <div>
                                <p>
                                    Discovery Primea is the latest addition to The Discovery <br />
                                    Leisure Company and stands along Ayala Avenue. You will <br />
                                    find the property situated at the heart of the Makati <br />
                                    Central Business District where commerce, leisure and <br />
                                    culture converge.
                                </p>
                                <div>

                                </div>
                                <p>
                                    For a taste of Manila’s cosmopolitan scene, if you’re<br />
                                    looking for a five star hotel near Glorietta, Rustan’s<br />
                                    Department Store, Greenbelt Mall, and Rockwell Mall,<br />
                                    Discovery Primea is an excellent option.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section >
    );
}

export default Map;