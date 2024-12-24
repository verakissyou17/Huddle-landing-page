import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { StyledContainer } from './styles/Container.styled.js';

function Container() {
  return (
    <StyledContainer role='This the container that holds all the project'>
      <Header />
      <Main />
      <Footer />
    </StyledContainer>
  )
}

export default Container
