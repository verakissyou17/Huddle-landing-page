import styled from 'styled-components';

export const StyledWhiteBox = styled.div`
  background-color: ${({theme}) => theme.colors.body};
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  padding: 1.5em  0.5em;
  width: 90%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  right: 5%;
  transform: translateY(-50%);

  h3 {
    margin-bottom: 1.5em;
    color: black;
    font-size: 1rem;
  }

  @media(min-width: ${({theme}) => theme.desktop}) {
    padding: 4em;
    width: 60%;
    right: 20%;
  }
`