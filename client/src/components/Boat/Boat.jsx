import React from "react";
import "./boat.css";

const Boat = ({ name, diverSeats, totalSeats, description }) => {
  return (
    <div className='boat-card'>
      <div className='boat-image' />
      <div className='boat-info'>
        <h3 className='boat-name'>{name}</h3>
        <p className='boat-seats'>
          {diverSeats} diver seats, {totalSeats} total seats
        </p>
        <p className='boat-description'>{description}</p>
      </div>
    </div>
  );
};

export default Boat;
