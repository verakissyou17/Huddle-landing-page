import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {

  return (
    <StyledSocialIcons>
      <li>
        <a
          href="https://twitter.com"
          aria-label="Twitter"
          rel="noopener noreferrer"
          target='_blank'
          tabindex="0"
        >
              <FaTwitter alt="Twitter icon" />
              <span aria-hidden="true"> Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          rel="noopener noreferrer"
          target='_blank'
          tabindex="0"
        >
            <FaFacebook alt="Facebook icon" />
            <span aria-hidden="true"> Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com"
          aria-label="Linkedin"
          rel="noopener noreferrer"
          target='_blank'
          tabindex="0"
        >
           <FaLinkedin alt="LinkedIn icon" />
           <span aria-hidden="true"> LinkedIn</span>
        </a>
      </li>
    </StyledSocialIcons>
  );
}
