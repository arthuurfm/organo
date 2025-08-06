import './TextField.css';

function TextField({type='text', label, placeholder, value, whenChanged, required}) {

  const whenTyped = (event) => {
    whenChanged(event.target.value);
  }

  return (
    <div className={`text-field text-field-${type}`}>
      <label>{label}</label>
      <input 
        type={type} 
        value={value} 
        onChange={whenTyped} 
        required={required} 
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;