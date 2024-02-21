import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CSS/ToastNotification.css';

const ToastNotification = ({ id, message, duration, type, removeNotification, index }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer;

    const handleMouseOver = () => {
      // Reset the timer when the user hovers over the toast
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsVisible(false);
        removeNotification(id);
      }, duration);
    };

    // Set the initial timer
    timer = setTimeout(() => {
      setIsVisible(false);
      removeNotification(id);
    }, duration);

    // Add event listener for mouseover
    const toastElement = document.getElementById(`toast-${id}`);
    if (toastElement) {
      toastElement.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      clearTimeout(timer);
      if (toastElement) {
        toastElement.removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, [duration, id, removeNotification]);

  const handleClose = () => {
    setIsVisible(false);
    removeNotification(id);
  };

  const bottomMargin = 50 * index;

  return (
    <div
      id={`toast-${id}`}
      className={`toast-notification ${type} ${isVisible ? 'visible' : 'hidden'}`}
      style={{ bottom: `${bottomMargin}px` }}
    >
      <div>{message}</div>
      <button onClick={handleClose}>X</button>
    </div>
  );
};

ToastNotification.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  removeNotification: PropTypes.func.isRequired,
};

export default ToastNotification;
