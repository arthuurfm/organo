import './Card.css';

function Card(props) {
  const color = {backgroundColor: props.color};

  return (
    <div className="card">
      <div style={color} className="header">
        <img src={props.image} alt={props.name}/>
      </div>
      <div className="footer">
        <h4>{props.name}</h4>
        <h5>{props.position}</h5>
      </div>
    </div>
  );
}

export default Card;