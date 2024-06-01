import React from 'react';
import Card from './Card';
import '../App.css';

function Section({ title, items }) {
    return (
      <div className="section">
        <h2>{title}</h2>
        <div className="section-items">
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    );
}

export default Section;
