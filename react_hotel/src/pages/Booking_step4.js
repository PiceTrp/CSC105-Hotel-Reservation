import Status from "../components/BookingStatus";
import Correct from "../pictures/EveryComponents/All_Icons/check.svg";
import Circle from "../pictures/EveryComponents/All_Icons/oval.svg";
import BookingHead from "../components/BookingHead";
import BookingSteps from "../components/BookingSteps";

const Booking_room = () => {
    return (
        <section id="booking">
            <BookingHead />
            <BookingSteps
                circle1={Correct}
                circle2={Correct}
                circle3={Correct}
                circle4={Correct}
            />
            <Status />
        </section>
    );
};

export default Booking_room;
