import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="#">Impressum</a>
        </li>
        <li>
          <i className="fa-regular fa-copyright"></i> 2024 by Sabine Weber
        </li>
        <li>Support: Chrissi und Danny von WebDevels</li>
      </ul>
    </footer>
  );
};

export default Footer;
