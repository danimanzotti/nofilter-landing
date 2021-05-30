import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              <Link to="/developers">Developers</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>

        <div className="copyright">© {currentYear} NoFilter</div>
      </div>
    </div>
  );
};

export default Footer;
