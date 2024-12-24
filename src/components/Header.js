import {StyledHeader, Nav, Logo, Image, Content} from './styles/Header.styled.js';
import { Button } from './styles/Button.styled.js';
import { Flex } from './styles/Flex.styled.js';
import logo from "../images/logo.svg";
import mock from "../images/illustration-mockups.svg";

function Header() {
  return (
    <StyledHeader>
        <Nav>
          <Logo src={logo} alt="logo" />
          <Button pd="0.5em 2em">Try It Free</Button>
        </Nav>
        <Flex>
        <Content>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <Button bg='#ff0099' color='#fff' pd='1em 3em'>Get Started For Free</Button>
          </Content>
          <Image src={mock} alt="mock-up-illustration"/>
        </Flex>
    </StyledHeader>
  )
}

export default Header
