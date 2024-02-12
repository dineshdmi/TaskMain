import React from 'react';
import eng1 from '../Assets/garrage1.jpg';
import eng2 from '../Assets/garrage2.jpg';
import eng3 from '../Assets/gaarage3.jpg';
import './CSS/TicketBookingPage.css';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-item active">
                    <img src={eng1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={eng2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={eng3} class="d-block w-100" alt="..." />
                </div>
            </div>


        </div>
    );
};

export default Carousel;