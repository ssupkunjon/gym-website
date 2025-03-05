import React from 'react';
import './Class.css';
import war from '../../assets/Warrior.jpg';
import fit from '../../assets/Fitness_Gym.jpg';
import dwn from '../../assets/download.jpg';
import dwn2 from '../../assets/dr.jpg';
import dwn3 from '../../assets/dw.jpg';
import hero from '../../assets/hero-1.jpg';

function Class() {
  return (
    <div className="container3">
      <p id="our">OUR CLASSES</p>
      <h1>WHAT WE CAN OFFER</h1>

      <div className="grid-container">
        <div className="grid-item">
          <img src={war} alt="Weightlifting" />
          <div className="overlay">
            <p className="category">STRENGTH</p>
            <h2>WEIGHTLIFTING</h2>
          </div>
        </div>

        <div className="grid-item">
          <img src={fit} alt="Indoor Cycling" />
          <div className="overlay">
            <p className="category">CARDIO</p>
            <h2>INDOOR CYCLING</h2>
          </div>
        </div>

        <div className="grid-item">
          <img src={dwn} alt="Kettlebell Power" />
          <div className="overlay">
            <p className="category">STRENGTH</p>
            <h2>KETTLEBELL POWER</h2>
          </div>
        </div>

        <div className="grid-item">
          <img src={dwn2} alt="Bodybuilding" />
          <div className="overlay">
            <p className="category">STRENGTH</p>
            <h2>BODYBUILDING</h2>
          </div>
        </div>

        <div className="grid-item">
          <img src={dwn3} alt="Boxing" />
          <div className="overlay">
            <p className="category">CARDIO</p>
            <h2>BOXING</h2>
          </div>
        </div>

        <div className="grid-item">
          <img src={hero} alt="Boxing" />
          <div className="overlay">
            <p className="category">CARDIO</p>
            <h2>BOXING</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class;

