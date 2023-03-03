import FooterContent from "./styled/FooterContent";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContent>
      <div>
        <div>
          <img src="./images/logo_white.png" alt="clarusway-logo" />
        </div>

        <div className="divFlex">
          <div>
            <p>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</p>
            <p>+1 (571) 360 66 77</p>
            <p>contact@clarusway.com</p>
          </div>

          <div>
            <p>About Us</p>
            <p>What We Do</p>
            <p>FAQ</p>
          </div>

          <div>
            <p>Career</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>
          <div className="social">
            <a href="https://twitter.com/">
              <FaTwitter className="icon" />
            </a>
            <a href="https://tr-tr.facebook.com/">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
    </FooterContent>
  );
};

export default Footer;
