import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="content-wrapper">
        <Link to="/">
          <img src="/img/nofilter-logo.png" alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
