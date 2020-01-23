import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="content-wrapper">
        <div className="bottom-navigation">
          <ul>
            <li>
              <Link to="/terms-of-use">Terms of use</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy policy</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>

        <div className="copyright">© 2019 NoFilter</div>
      </div>
    </div>
  );
};

export default Footer;
