import styled from 'styled-components';

export const StyledMain = styled.div`
 padding: 2em 1em 10em;

 @media(min-width: ${({theme}) => theme.desktop}) {
   padding: 5em 5em 10em;
  }
`