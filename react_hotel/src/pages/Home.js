import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Map from "../components/Map";
import Service from "../components/Service";
import Rooms from "../components/Rooms";
import Footer from "../components/Footer";
import { createRef } from "react";

const Home = () => {
    const bannerRef = createRef();
    const aboutRef = createRef();
    const roomRef = createRef();
    const footerRef = createRef();

    return (
        <>
            <Nav
                bannerRef={bannerRef}
                aboutRef={aboutRef}
                roomRef={roomRef}
                footerRef={footerRef}
            />
            <Banner ref={bannerRef} />
            <Welcome />
            <About ref={aboutRef} />
            <Rooms ref={roomRef} />
            <Footer ref={footerRef} />
        </>
    );
};

export default Home;
