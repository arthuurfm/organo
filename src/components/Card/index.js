import './Card.css';
import { AiFillCloseCircle } from 'react-icons/ai';

function Card({card, bgColor, whenDeleted}) {
  const backgroundColor = {backgroundColor: bgColor};

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
      </div>
    </div>
  );
}

export default Card;