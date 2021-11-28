import Facebook from "../pictures/EveryComponents/All_Icons/facebook.png";
import Instragram from "../pictures/EveryComponents/All_Icons/IG.png";
import Twitter from "../pictures/EveryComponents/All_Icons/twitter.png";
import Youtube from "../pictures/EveryComponents/All_Icons/youtube.png";
import Service from "../pictures/EveryComponents/All_Icons/pic_service.png";
import img1 from "../pictures/EveryComponents/All_Icons/LVX.png";
import img2 from "../pictures/EveryComponents/All_Icons/johansen.png";
import { forwardRef } from "react";

const Footer = (props, ref) => {
    return (
        <section id="footer" ref={ref}>
            <div class="container">
                <div class="content">
                    <p>health & safety</p>
                    <div></div>
                    <img src={Service} width="1000px" />
                    <div>
                        <img src={img1} width="200px" />
                        <img src={img2} width="200px" />
                    </div>
                    <p>+66 843840477</p>
                    <p>theerapat.pice@mail.kmutt.ac.th</p>
                </div>

                <div class="end">
                    <div>
                        <p>ROYAL CORAL</p>
                        <p>© Discovery Hospitality. All Rights Reserved.</p>
                    </div>
                    <div>
                        <a href="#">
                            <img src={Facebook} width="70px" height="70px" />
                        </a>
                        <a href="#">
                            <img src={Instragram} width="76px" height="76px" />
                        </a>
                        <a href="#">
                            <img src={Twitter} width="70px" height="70px"></img>
                        </a>
                        <a href="#">
                            <img src={Youtube} width="65px" height="65px" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default forwardRef(Footer);
