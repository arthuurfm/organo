import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Sector from './components/Sector';
import Footer from './components/Footer';

function App() {

  // estilização de cada setor da lista.
  const sectors = [
    {
      name: 'Goleiro',
      primaryColor: '#57c278',
      secundaryColor: '#d9f7e9'
    },
    {
      name: 'Defesa',
      primaryColor: '#a6d157',
      secundaryColor: '#f0f8e2'
    },
    {
      name: 'Meio-campo',
      primaryColor: '#ffba05',
      secundaryColor: '#fff5d9'
    },
    {
      name: 'Ataque',
      primaryColor: '#ff8a29',
      secundaryColor: '#ffeedf'
    },
  ];

  const [players, setPlayers] = useState([]);

  // quando um novo item é adicionado, espalha a lista antiga com o novo item.
  const whenNewPlayerAdded = (player) => {
    debugger;
    setPlayers([...players, player]);
  }

  return (
    <div className="App"> 
      <Banner/>
      <Form 
        sectorsName={sectors.map(sector => sector.name)}
        whenRegisteredPlayer={player => whenNewPlayerAdded(player)}
      />
      {sectors.map(sector => 
        <Sector 
          key={sector.name} 
          name={sector.name} 
          primaryColor={sector.primaryColor}
          secundaryColor={sector.secundaryColor}
          cards={players.filter(player => player.sector === sector.name)}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
 