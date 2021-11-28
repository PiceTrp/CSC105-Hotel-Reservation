import Confirmation from "../components/BookingConfirmation";
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
                circle3={Circle}
                circle4={Circle}
            />
            <Confirmation />
        </section>
    );
};

export default Booking_room;
