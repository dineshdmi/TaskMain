import React, { useEffect, useState } from "react";
import "./App.css";
import ToastNotification from "./Components/ToastNotification";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const MAX_VISIBLE_NOTIFICATIONS = 3;

function App() {
  const [toasts, setToasts] = useState([]);
  const [notificationQueue, setNotificationQueue] = useState([]);

  const addToast = (message, type = "success", duration = 7000) => {
    const toast = { id: Math.random()+Date.now(), message, duration, type };
    if (toasts.length < MAX_VISIBLE_NOTIFICATIONS) {
      setToasts((prevToasts) => [...prevToasts, toast]);
    } else {
      // If not, add it to the queue
      addNotificationToQueue(toast);
    }
  };

  const removeToast = (id) => {
    let toastNotifications = [...toasts];
    toastNotifications = toastNotifications.filter((notification) => notification.id !== id)
    if (notificationQueue.length > 0) {
      const [nextNotification, ...restQueue] = notificationQueue;
      setNotificationQueue(restQueue);
      toastNotifications.push(nextNotification);
    }
    setToasts(toastNotifications);
  };

  // Function to add a new notification to the queue
  const addNotificationToQueue = (notification) => {
    setNotificationQueue((prev) => [...prev, notification]);
  };

  return (
    <div className="app-container">
      <div className="main-content">
        {toasts?.map((toast,index) => (
          <ToastNotification key={toast.id} {...toast} removeNotification={removeToast} index={index+1}/>
        ))}
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route
              index
              element={
                <Component1 onShowToast={() => addToast("Default Message","info")} />
              }
            />
            <Route
              path="/component1"
              element={
                <Component1 onShowToast={() => addToast("Default Message","info")} />
              }
            />
            <Route
              path="/component2"
              element={<Component2 onShowToast={addToast} />}
            />
            <Route
              path="/component3"
              element={<Component3 onShowToast={addToast} />}
            />
          </Routes>
          
        </BrowserRouter>
      </div>
       <Footer/>
    </div>
  );
}

export default App;
