import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="content-wrapper">
        <Link to="/">
          <img src="/img/nofilter-logo.png" alt="logo" />
        </Link>
        <Link to="/contact" className="contact">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Header;
