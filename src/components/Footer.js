import SocialIcons from './SocialIcons';
import { StyleFooter } from './styles/Footer.styled';
import WhiteBox from './WhiteBox.js';
import { Flex } from './styles/Flex.styled.js';
import whiteLogo from '../images/logo_white.svg';
import locationIcon from '../images/icon-location.svg';
import phoneIcon from '../images/icon-phone.svg';
import emailIcon from '../images/icon-email.svg';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <StyleFooter>
      <WhiteBox />
      <img src={whiteLogo} alt="white-logo" />
      <Flex>
        <ul>
          <li>
            <img src={locationIcon} alt="location-icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </li>
          <li>
            <img src={phoneIcon} alt="phone-icon" />
            <a href="+1-543-123-4567">+1-543-123-4567</a>
          </li>
          <li>
            <img src={emailIcon} alt="email-icon" />
            <a href="#">example@huddle.com</a>
          </li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>

        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <SocialIcons />
      </Flex>
      <p>&copy; {currentYear} Huddle. All rights reserved</p>
    </StyleFooter>
  );
}

export default Footer;
