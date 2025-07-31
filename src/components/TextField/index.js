import './TextField.css';

function TextField(props) {

  const whenTyped = (event) => {
    props.whenChanged(event.target.value);
  }

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input value={props.value} onChange={whenTyped} required={props.required} placeholder={props.placeholder}/>
    </div>
  );
}

export default TextField;