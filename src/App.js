import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Sector from './components/Sector';
import Footer from './components/Footer';
import {v4 as uuidv4} from 'uuid';

function App() {

  // estilização de cada setor da lista.
  const [sectors, setSectors] = useState([
    {
      id: uuidv4(),
      name: 'Goleiro',
      color: '#57c278',
    },
    {
      id: uuidv4(),
      name: 'Defesa',
      color: '#a6d157',
    },
    {
      id: uuidv4(),
      name: 'Meio-campo',
      color: '#ffba05',
    },
    {
      id: uuidv4(),
      name: 'Ataque',
      color: '#ff8a29',
    },
  ]);

  const [players, setPlayers] = useState([]);

  const deletePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  } 

  // quando um novo item é adicionado, espalha a lista antiga com o novo item.
  const whenNewPlayerAdded = (player) => {
    const newPlayer = {...player, id: uuidv4()}
    setPlayers([...players, newPlayer]);
  }

  const changeSectorColor = (color, id) => {
    setSectors(sectors.map(sector => {
      if (sector.id === id) {
        sector.color = color;
      }
      return sector;
    }));
  }

  const registerSector = (newSector) => {
    setSectors([...sectors, {...newSector, id: uuidv4()}]);
  }

  const solveFavorite = (id) => {
    setPlayers(players.map(player => {
      if (player.id === id) player.favorite = !player.favorite;
      return player;
    }));
  }

  return (
    <div className="App"> 
      <Banner/>
      <Form
        registerSector={registerSector}
        sectorsName={sectors.map(sector => sector.name)}
        whenRegisteredPlayer={player => whenNewPlayerAdded(player)}
      />
      {sectors.map((sector, index) => {
        return (
          <Sector 
            key={index} 
            sector={sector}
            cards={players.filter(player => player.sector === sector.name)}
            whenDeleted={deletePlayer}
            changeColor={changeSectorColor}
            whenFavorite={solveFavorite}
          />
        )
      })}
      <Footer/>
    </div>
  );
}

export default App;
 