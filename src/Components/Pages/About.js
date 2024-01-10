// About.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import travel from '../Assets/travel.jpg';


const About = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div
            style={{
                textAlign: 'center',
                padding: '20px',
            }}
            className="about-container"
        >
            <header
                style={{
                    backgroundColor: 'whitesmoke',
                    color: 'black',
                    padding: '15px',
                }}
            >
                <h1>About This Project</h1>
            </header>
            <section
                style={{
                    marginTop: '20px',
                }}
                className="about-content"
            >
                <Slider {...sliderSettings}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh', // Adjust this based on your needs
                        }}
                    >
                        <img
                            style={{
                                width: '40%',
                                height: '40%',
                                borderRadius: '8px',
                                marginLeft:'30%'
                            }}
                            src={travel}
                            alt="Beach Destination"
                        />
                    </div>
                    <div>
                        {/* Embed YouTube video */}
                        <iframe
                            title="Beach Destination"
                            width="560"
                            height="315"
                            src="https://player.vimeo.com/external/330412624.sd.mp4?s=853ea7644708b7986c992689dd351b0413d7b3ca&profile_id=164&oauth2_token_id=57447761"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* ... (other slides) */}
                </Slider>
                <p
                    style={{
                        fontSize: '16px',
                        lineHeight: '1.5',
                    }}
                >
                    Welcome to our travel project! Explore the world with us and discover amazing destinations.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam vel
                    libero varius vehicula vitae at quam. Curabitur ultrices tristique nulla,
                    nec tincidunt augue congue ac.
                </p>
            </section>
        </div>
    );
};

export default About;
