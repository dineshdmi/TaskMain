// TicketBookingPage.js
import React, { useState, useEffect } from 'react';
import './CSS/TicketBookingPage.css';
import { MdEventSeat } from 'react-icons/md';

const TicketBookingPage = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [locations, setLocations] = useState([]);

    const totalSeats = 10;

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                // Assuming the API returns data in the following format
                const response = await fetch('https://api.example.com/locations');
                const data = await response.json();
                setLocations(data);
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        fetchLocations();
    }, []);

    const handleSeatClick = (seatNumber) => {
        setSelectedSeats((prevSelectedSeats) => {
            if (prevSelectedSeats.includes(seatNumber)) {
                return prevSelectedSeats.filter((seat) => seat !== seatNumber);
            } else {
                return [...prevSelectedSeats, seatNumber];
            }
        });
    };

    const calculateTotalPrice = () => {
        const selectedLocationData = locations.find((location) => location.id === selectedLocation);
        const seatPrice = selectedLocationData ? selectedLocationData.price : 100; // Default price if location is not found
        return selectedSeats.length * seatPrice;
    };

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const renderSeats = () => (
        Array.from({ length: totalSeats }, (_, index) => {
            const seatNumber = index + 1;
            return (
                <div
                    key={seatNumber}
                    className={`seat ${selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(seatNumber)}
                >
                    <MdEventSeat />
                </div>
            );
        })
    );

    return (
        <div className="ticket-booking-page">
            <h1> Ticket Booking</h1>
            <div className="seating-area">{renderSeats()}</div>
            <div className="booking-details">
                <h2>Booking Details</h2>
                <label htmlFor="location">Select Location:</label>
                <select id="location" value={selectedLocation} onChange={handleLocationChange}>
                    <option value="">Select Location</option>
                    <option value="India">India</option>
                    <option value="NewYork">New York</option>
                    <option value="America">America</option>
                </select>
                <p>Selected Seats: {selectedSeats.length}</p>
                <p>Total Price: ${calculateTotalPrice()}</p>
                {/* ... (other booking details) */}
            </div>
            <div className="selected-seats">
                <p>Selected Seats No: {selectedSeats.join(', ')}</p>
            </div>
        </div>
    );
};

export default TicketBookingPage;
