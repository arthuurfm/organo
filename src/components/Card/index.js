import './Card.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function Card({card, bgColor, whenDeleted, whenFavorite}) {
  const backgroundColor = {backgroundColor: bgColor};

  const favorite = () => {
    whenFavorite(card.id);
  }

  // propriedades globais para todos com classe favorite.
  const propsFavorite = {
    size: 25,
    onClick: favorite
  }

  return (
    <div className="card">
      <AiFillCloseCircle 
        size={25} 
        className="delete" 
        onClick={() => whenDeleted(card.id)}
      />
      <div style={backgroundColor} className="header">
        <img src={card.image} alt={card.name}/>
      </div>
      <div className="footer">
        <h4>{card.name}</h4>
        <h5>{card.position}</h5>
        <div className="favorite">
          {card.favorite
            ? <AiFillHeart {...propsFavorite} color="#ff0000"/>
            : <AiOutlineHeart {...propsFavorite}/>}
        </div>
      </div>
    </div>
  );
}

export default Card;