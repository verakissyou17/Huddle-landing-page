import { StyledCard } from "./styles/Card.styled";

 function Card({item}) {
  return (
    <StyledCard $layout={item.id % 2 !== 0 ? 'row-reverse' : 'row'}>
      <div>
        <img src={require(`../images/${item.image}`)} alt={item.title} />
      </div>
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
    </StyledCard>
  )
}


export default Card;
