import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {

  const rating = () => {
    const num = props.rating;
    switch (true) {
      case num >= 0 && num < 0.5:
        return '☆☆☆☆☆';
      case num >= 0.5 && num < 1.5:
        return '★☆☆☆☆';
      case num >= 1.5 && num < 2.5:
        return '★★☆☆☆';
      case num >= 2.5 && num < 3.5:
        return '★★★☆☆';
      case num >= 3.5 && num < 4.5:
        return '★★★★☆';
      case num >= 4.5 && num <= 5:
        return '★★★★★';
    }
  }

  return ( 
    <div className="driver-card-container">
      <img src={props.img} alt="" className="driver-img"/>
      <div className="driver-info-container">
        <p>{props.name}</p>
        <p>{rating()}</p>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  )
}