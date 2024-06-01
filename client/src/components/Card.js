import React from 'react';
import '../App.css';

function Card({ item }) {
    return (
      <div className="card">
        <img src={item.image} alt={item.title} className="card-image" />
        <div className="card-details">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      </div>
    );
}

export default Card;
