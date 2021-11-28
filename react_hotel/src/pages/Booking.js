import Information from "../components/BookingInformation";
import Correct from "../pictures/EveryComponents/All_Icons/check.svg";
import Circle from "../pictures/EveryComponents/All_Icons/oval.svg";
import BookingHead from "../components/BookingHead";
import BookingSteps from "../components/BookingSteps";

const Booking = () => {
    return (
        <section id="booking">
            <BookingHead />
            <BookingSteps
                circle1={Circle}
                circle2={Circle}
                circle3={Circle}
                circle4={Circle}
            />
            <Information />
        </section>
    );
};

export default Booking;
