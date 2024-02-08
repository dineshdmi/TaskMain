// TravelHomePage.js

import React from 'react';
import '../TravelInformation/TravelInformation.css';
import beachImage from '../Assets/beachImage.jpg';
import mountainImage from '../Assets/mountainImage.jpg';
import cityImage from '../Assets/cityImage.jpg';

const TravelHomePage = () => {
    return (
        <div className="container">
            <div className="travel-home">
                <header className="header">
                    <h1>Explore the World</h1>
                </header>
                <section className="destinations">
                    <div className="destination">
                        <img src={beachImage} alt="Beach Destination" />
                        <h2>Beach Paradise</h2>
                        <p>Relax on the sandy beaches with crystal clear waters.</p>
                    </div>
                    <div className="destination">
                        <img src={mountainImage} alt="Mountain Destination" />
                        <h2>Mountain Adventure</h2>
                        <p>Experience breathtaking views and hiking trails.</p>
                    </div>
                    <div className="destination">
                        <img src={cityImage} alt="City Destination" />
                        <h2>City Exploration</h2>
                        <p>Discover vibrant cultures and bustling city life.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TravelHomePage;
