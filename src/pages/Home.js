import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Map from "../components/Map";
import Service from "../components/Service";
import Rooms from "../components/Rooms";

const Home = () => {
    return (
        <>
            <Nav />
            <Banner />
            <Welcome />
            <About />

            <Rooms />
        </>
    );
}

export default Home;