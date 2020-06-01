import React from 'react';
import './styles.scss';

const Photo = ({ item }) => (
  <div className="photo-wrapper">
    <div
      className="photo"
      style={{ backgroundImage: `url(${item.photosHydrated[0].urls.regular})` }}
    />
  </div>
);

const Slider = ({ items }) => {
  return (
    <div className="Slider">
      {items.map(item => (
        <Photo key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Slider;
