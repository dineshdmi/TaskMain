// Home.js

import React from 'react';
import './CSS/Home.css';
// import engine1 from '../Assets/'
// import engine2 from '../Assets/engine2.jpg'
// import engine3 from '../Assets/engine3.jpg'



const Home = () => {
  return (
    <div>
      <div className="col-sm-10 mb-2 mb-sm-5">
        <div className="card1">
          <div className="card-body1">
            {/* <img src={engine1} alt='image' />
            <img src={engine2} alt='image' />
            <img src={engine3} alt='image' /> */}

            <h5 className="card-title1">Special title treatment</h5>
            <p className="card-text1">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary1">Go somewhere</a>
          </div>
        </div>
      </div>

      <h2>Why Choose Aftermarket Products?</h2>
      <div className="row">
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <img src='' alt='image' />
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <img src='' alt='image' />

              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-2 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <img src='' alt='image' />

              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
