import { Link } from 'react-router-dom';
import './Header.scss';

import logo from '../../img/logo.svg'

function Header() {
  return (
    <header id="header">
      <div id="header_container">
        <div id="header_logo">
          <div>
            <img src={logo} />
          </div>
          <div>
              <h1>Benjamin Humez</h1>
          </div>
        </div>
        <div id="header_menu">
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
     
    </header>
  );
}

export default Header;