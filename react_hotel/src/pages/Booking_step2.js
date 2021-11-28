import Rooms from "../components/BookingRooms";
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
                circle2={Circle}
                circle3={Circle}
                circle4={Circle}
            />
            <Rooms />
        </section>
    );
};

export default Booking_room;
