import './Form.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

function Form({whenRegisteredPlayer, sectorsName, registerSector}) {

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [sector, setSector] = useState('');
  const [sectorName, setSectorName] = useState('');
  const [sectorColor, setSectorColor] = useState('');

  // quando o formulário é salvo (ou preenchido), depois de clicar em criar card.
  const whenSaving = (event) => {
    event.preventDefault();
    whenRegisteredPlayer({
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
        <h2>Preencha os dados para criar o card do jogador:</h2>
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
          itens={sectorsName}
          value={sector}
          whenChanged={value => setSector(value)}
        />
        <Button text="Criar card"/>
      </form>

      <form onSubmit={(event => {
        event.preventDefault();
        registerSector({name: sectorName, color: sectorColor});
      })}>
        <h2>Preencha os dados para criar um novo setor:</h2>
        <TextField 
          required={true} 
          label="Nome" 
          placeholder="Digite o nome do setor"
          value={sectorName}
          whenChanged={value => setSectorName(value)}
        />
        <TextField 
          required={true} 
          type="color"
          label="Cor" 
          placeholder="Digite a cor do setor" 
          value={sectorColor}
          whenChanged={value => setSectorColor(value)}
        />
        <Button text="Criar um novo setor"/>
      </form>
    </section>
  );
}

export default Form;