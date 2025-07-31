import './DropdownList.css';

// uma lista onde os itens são criados dinamicamente com um array.
function DropdownList(props) {
  return (
    <div className='dropdown-list'>
      <label>{props.label}</label>
      <select onChange={event => props.whenChanged(event.target.value)} required={props.required}
      value={props.value}>
        <option value="">Selecione um setor</option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default DropdownList;