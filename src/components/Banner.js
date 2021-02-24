import { faCalendarAlt, faCrow, faCrown, faGem } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Banner = () => {
    return (
        <section id="banner">

            <div class="overlay">

            </div>

            <h1>
                A LUXURY EXCLUSIVE HOTEL <br /> YOU DESERVE
            </h1>

            <div id="bookingtable">

                <div class="bbb">
                    ARRIVAL
                <div class="date-selector">
                        <p>24 Aug 2021</p>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                </div>

                <div class="bbb">
                    DEPARTURE
                <div class="date-selector">
                        <p>24 Aug 2021</p>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                </div>

                <div class="bbb">
                    TYPE
                <div class="type-selector">
                        <div>
                            <FontAwesomeIcon icon={faGem} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCrown} />
                        </div>
                    </div>
                </div>

                <div class="bbb">
                    PEOPLE
                <div class="number-selector">
                        <input type="number" />
                    </div>
                </div>

                <div class="bbb" id="box">
                    <a href="#" class="book">
                        <p class="book-hover">
                            BOOK NOW
                        </p>
                    </a>
                </div>
            </div>

        </section>
    );
}

export default Banner;