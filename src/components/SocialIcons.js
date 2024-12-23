import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com" aria-label='Twitter'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com" aria-label='Facebook'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com" aria-label='Linkedin'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
