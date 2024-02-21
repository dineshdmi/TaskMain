import React from 'react';

const Component1 = ({ onShowToast, serialNumber }) => {
    const handleButtonClick = () => {
        onShowToast(`Default Message ${serialNumber}`);
    };

    return (
        <div className="centered-container">
            <h2>Component 1</h2>
            <button className='stdbtn' type="button" onClick={handleButtonClick}>
                Show Default Toast
            </button>
        </div>
    );
};

export default Component1;
