import { Parallax } from 'react-parallax';
import Pic_wel from '../pictures/EveryComponents/Pics_rooms/Outdoors/Exclusive3_copy.jpg';

const Welcome = () => {
    return (
        <section id="welcome">
            <Parallax bgImage={Pic_wel} bgImageAlt="the cat" strength={450}>
                <div class="container">
                    <p>
                        Welcome
                    </p>
                    <p>
                        Located on Canal St in The Village Manchester’s most vibrant district, a short walk from <br />
                        Piccadilly Railway Station. Each stunning bedroom and penthouse suites are individually<br />
                        designed to an exceptionally high 4* standard offering indulgent luxury in one of the largest cities<br />
                        in the UK.
                    </p>
                </div>
            </Parallax>

        </section>
    );
}

export default Welcome;