import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Ranking from './components/Ranking';

function App() {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    handlePopulateCharacters()
  }, []);

  async function handlePopulateCharacters() {
    const response = await fetch('https://www.breakingbadapi.com/api/characters?limit=10&offset=10', {
      method: 'GET',
      headers: {
        "content-type": "application/json"
      }
    });

    const data = await response.json();
    
    const formattedCharacters = [];

    for (const character of data) {
      formattedCharacters.push(
        {
          id: character.char_id,
          name: character.name,
          img: character.img,
          votes: 0
        }
      );
    }

    setCharacters(formattedCharacters);
  }

  function handleAddVote(value, characterId) {
    const localCharacter = [...characters];
    
    const indexCharacter = localCharacter.findIndex(item => item.id === characterId);

    if(indexCharacter === -1) {
      return;
    } 

    const newCountVotes = localCharacter[indexCharacter].votes + value; 

    if(newCountVotes >= 0) {
      localCharacter[indexCharacter].votes = newCountVotes;  
    }
    
    setCharacters([...localCharacter]);
  }


  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <div className="character-list">
          <Card characters={characters} handleAddVote={handleAddVote}/>
        </div>
        <Ranking characters={characters}/>
      </div>
    </div>
  );
}

export default App;
