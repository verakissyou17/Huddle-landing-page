import {StyledHeader, Nav, Logo, Image, Content} from './styles/Header.styled.js';
import { Button, PinkButton} from './styles/Button.styled.js';
import { Flex } from './styles/Flex.styled.js';
import logo from "../images/logo.svg";
import mock from "../images/illustration-mockups.svg";

function Header() {
  return (
    <StyledHeader>
        <Nav>
          <Logo src={logo} alt="logo" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
        <Content>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <PinkButton>Get Started For Free</PinkButton>
          </Content>
          <Image src={mock} alt="mock-up-illustration"/>
        </Flex>
    </StyledHeader>
  )
}

export default Header
