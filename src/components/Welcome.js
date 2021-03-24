import { Parallax } from "react-parallax";
import Pic_wel from "../pictures/EveryComponents/Pics_rooms/Outdoors/Exclusive3_copy.jpg";
import Bg from "../pictures/Everypics_inweb/decoration/close-up-white-marble-texture-background.jpg";

const Welcome = () => {
    const sectionStyle = {
        width: "100%",
        height: "200px",
        backgroundImage: `url(${Bg})`,
    };

    return (
        <section id="welcome">
            <div class="bg" style={sectionStyle}></div>
            <Parallax bgImage={Pic_wel} bgImageAlt="the cat" strength={450}>
                <div class="container">
                    <p>Welcome</p>
                    <p>
                        Located on Canal St in The Village Manchester’s most
                        vibrant district, a short walk from <br />
                        Piccadilly Railway Station. Each stunning bedroom and
                        penthouse suites are individually
                        <br />
                        designed to an exceptionally high 4* standard offering
                        indulgent luxury in one of the largest cities
                        <br />
                        in the UK.
                    </p>
                    <div class="overlay"></div>
                </div>
            </Parallax>
        </section>
    );
};

export default Welcome;
