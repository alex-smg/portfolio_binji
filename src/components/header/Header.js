import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

import logo from '../../img/logo.svg'

function Header() {
  let slug  = useLocation();
  console.log(slug);
  return (
    <header id="header">
      <div id="header_container">
        <div id="header_logo">
          <div>
            <img src={logo} alt="logo Benji"/>
          </div>
          <div>
            <Link to="/about">
              <h1>Benjamin Humez</h1>
            </Link>
          </div>
        </div>
        <div id="header_menu">
          <ul>
            <li>
              <Link to="/projects" className={slug.pathname === '/projects' ? 'select_link' : ''}>Projects</Link>
            </li>
            <li>
              <Link to="/about" className={slug.pathname === '/about' || slug.pathname === '/'? 'select_link' : ''}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={slug.pathname === '/contact' ? 'select_link' : ''}>contact</Link>
            </li>
          </ul>
        </div>
      </div>
     
    </header>
  );
}

export default Header;