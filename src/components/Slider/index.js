import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const Photo = ({ item }) => {
  const { t } = useTranslation();
  const [showText, setShowText] = useState(false);

  const handleClickOnPhoto = () => {
    setShowText(true);
    window.gtag('event', 'slider_photo_click');
  };

  return (
    <div className="photo-wrapper" onClick={handleClickOnPhoto}>
      <div className="photo" style={{ backgroundImage: `url(${item.photos[0].urls.regular})` }}>
        {showText && (
          <div className="want">{t("Want to see more? Download the app. It's free!")}</div>
        )}
      </div>
    </div>
  );
};

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
