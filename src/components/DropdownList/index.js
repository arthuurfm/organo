import './DropdownList.css';

// uma lista onde os itens são criados dinamicamente com um array.
function DropdownList({label, value, whenChanged, itens, required}) {
  return (
    <div className='dropdown-list'>
      <label>{label}</label>
      <select onChange={event => whenChanged(event.target.value)} required={required}
      value={value}>
        <option value="">Selecione um setor</option>
        {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default DropdownList;