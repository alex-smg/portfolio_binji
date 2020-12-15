import twitter from '../../img/footer/svgTwitter.svg';
import linkedin from '../../img/footer/svgLinkedin.svg';
import { Link } from 'react-router-dom';
import './Footer.scss'

function Footer() {
    return (
      <footer id="Footer">
          <div>
            <div>
                <Link to="https://www.linkedin.com/in/benjamin-humez/">
                    <img src={linkedin} alt="link linkedin"/>
                </Link>
                <Link to="https://twitter.com/BenjaminHumez">
                    <img src={twitter} alt="link twitter"/>
                </Link>
            </div>
            <div id="footer_legal">
                <Link to="">Terms and conditions</Link>
                <Link to="">Legal notice</Link>
            </div>
            <p>© Copyright 2020 Benjamin Humez</p>
          </div>
      </footer>
    );
  }
  
export default Footer;