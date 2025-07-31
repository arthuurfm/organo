import './Form.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

function Form(props) {

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [sector, setSector] = useState('');

  // quando o formulário é salvo (ou preenchido), depois de clicar em criar card.
  const whenSaving = (event) => {
    event.preventDefault();
    props.whenRegisteredPlayer({
      name,
      position,
      image,
      sector
    });
    
    setName('');
    setPosition('');
    setImage('');
    setSector('');
  }

  return (
    <section className='form'>
      <form onSubmit={whenSaving}>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <TextField 
          required={true} 
          label="Nome" 
          placeholder="Digite seu nome"
          value={name}
          whenChanged={value => setName(value)}
        />
        <TextField 
          required={true} 
          label="Posição" 
          placeholder="Digite sua posição" 
          value={position}
          whenChanged={value => setPosition(value)}
        />
        <TextField 
          required={true} 
          label="Imagem" 
          placeholder="Digite o endereço da imagem"
          value={image}
          whenChanged={value => setImage(value)}
        />
        <DropdownList 
          required={true} 
          label="Setor" 
          itens={props.sectorsName}
          value={sector}
          whenChanged={value => setSector(value)}
        />
        <Button text="Criar card"/>
      </form>
    </section>
  );
}

export default Form;