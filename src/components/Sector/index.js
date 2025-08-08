import './Sector.css';
import Card from '../Card';
import hexToRgba from 'hex-to-rgba';

function Sector({whenDeleted, cards, sector, changeColor, whenFavorite}) {

  // exclui um card de acordo com seu index e seu id único.
  const handleDelete = (playerId, index) => {
    whenDeleted(playerId, index);
  }
  return (
    (cards.length > 0) && 
    <>
      <section className="sector" style={{backgroundColor: hexToRgba(sector.color, 0.5)}}>
        <input 
          className="input-color"
          type="color" 
          value={sector.color}
          onChange={event => changeColor(event.target.value, sector.id)} 
        />
        <h3 style={{borderColor: sector.color}}>{sector.name}</h3>
        <div className="cards">
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                card={card}
                bgColor={sector.color}
                whenDeleted={() => handleDelete(card.id, index)}
                whenFavorite={whenFavorite}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Sector;