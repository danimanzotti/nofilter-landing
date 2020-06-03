import React, { useState } from 'react';
import './styles.scss';

const Photo = ({ item }) => {
  const [showText, setShowText] = useState(false);

  const handleClickOnPhoto = () => {
    setShowText(true);
    window.gtag('event', 'slider_photo_click');
  };

  return (
    <div className="photo-wrapper" onClick={handleClickOnPhoto}>
      <div className="photo" style={{ backgroundImage: `url(${item.url})` }}>
        {showText && <div className="want">Want to see more? Download the app. It's free!</div>}
      </div>
    </div>
  );
};

const Slider = ({ items }) => {
  return (
    <div className="Slider">
      {items.map(item => (
        <Photo key={item.url} item={item} />
      ))}
    </div>
  );
};

export default Slider;
