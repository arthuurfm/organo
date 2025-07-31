import './Sector.css';
import Card from '../Card'

function Sector(props) {

  return (
    (props.cards.length > 0) && 
    <section className="sector" style={{backgroundColor: props.secundaryColor}}>
      <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
      <div className="cards">
        {props.cards.map(card => 
          <Card
            key={card.name}
            name={card.name} 
            position={card.position} 
            image={card.image}
            color={props.primaryColor}
          />
        )}
      </div>
    </section>
  );
}

export default Sector;