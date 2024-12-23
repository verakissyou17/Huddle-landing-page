import content from '../content.js';
import Card  from './Card.js';
import { StyledMain } from './styles/Main.styled.js';

function Main() {
  content.map(item => console.log(item.id))
  return (
    <StyledMain>
         {content.map((item, index) => {
        return  <Card key={index} item={item}/>
        })}
    </StyledMain>
  )
}

export default Main
