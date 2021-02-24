import Img from '../pictures/EveryComponents/Discover/makati-serviced-apartment.jpg';
import Facebook from '../pictures/EveryComponents/All_Icons/facebook.png';
import Instragram from '../pictures/EveryComponents/All_Icons/IG.png';
import Twitter from '../pictures/EveryComponents/All_Icons/twitter.png';
import Youtube from '../pictures/EveryComponents/All_Icons/youtube.png';

const About = () => {
    return (
        <section id="about_01">
            <div class="box_1">

                <div class="box_left">
                    <h1>
                        AT THE HEIGHT OF MODERN LUXURY
                    </h1>
                    <div>
                        <img src={Img} width="685px" height="440px" />
                    </div>
                </div>

                <div class="box_right">
                    <p>
                        Situated along Ayala Avenue in the Makati Central Business District, is a row of residential buildings
                        known as Apartment Ridge. Amidst the city’s shopping centers and business hubs, Discovery Primea <span>luxury
                        hotel in Makati</span> occupies the most desirable corporate and residential address in the Philippines where
                        business, leisure, and culture converge.
                    </p>
                    <p>
                        Discovery Primea is a member of the prestigious Preferred Hotels & Resorts LVX Collection, a selection
                        of refined and globally sophisticated hotels and resorts in coveted locations from vibrant city centers
                        to destination landscapes.
                    </p>
                    <div>
                        <a href="#">
                            <p>
                                BOOK NOW
                            </p>
                        </a>

                        <div>
                            <a href="#">
                                <img src={Facebook} width="80px" height="80px" />
                            </a>
                            <a href="#">
                                <img src={Instragram} width="84px" height="84px" />
                            </a>
                            <a href="#">
                                <img src={Twitter} width="80px" height="80px"></img>
                            </a>
                            <a href="#">
                                <img src={Youtube} width="78px" height="78px" />
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;