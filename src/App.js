import './index.css';
import axios from 'axios';
import Gallery from './components/Gallery';
import Quote from './components/Quote';
import { useEffect, useState } from 'react';
import { getRandomQuotePosition } from './lib/helpers';


function App() {
  const [characters, setCharacters] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [quotePosition, setQuotePosition] = useState(null);

  const getSingleCharacter = async ( characterName ) => {
    try {
      const response = await axios.get(
        `https://intense-journey-36207.herokuapp.com/character/${characterName}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        }
      );
      if(response.data.length > 0) {
        setSelectedCharacter(response.data[0]);
      }      
    } catch(err) {
      console.log(err);
    }
  }

  const updateSelectedCharacter = ( characterName ) => {
    // Get data from the selected character
    getSingleCharacter(characterName);

  }

  useEffect(() => {
    // Get the data from all the characters and update the state if possible
    const getAllCharacters = async () => {
      try {
        const response = await axios.get(
          'https://intense-journey-36207.herokuapp.com/character/all',
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
            }
          }
        );
        setCharacters(response.data);
      } catch(err) {
        console.log(err);
      }
    }

    getAllCharacters();
  }, [])

  useEffect(() => {
      if(selectedCharacter !== null) {
        // Get a random quote array position from the  selected character quotes array
        const quoteArrayPosition = getRandomQuotePosition(selectedCharacter.quotes);            
        setQuotePosition(quoteArrayPosition);
      }
  }, [selectedCharacter]);

  
  return (
    <div className="App">
      <div className="w-screen bg-center bg-cover bg-[url('../public/img/cast-walking.jpeg')]">
        <section className="container mx-auto grid grid-cols-12 h-80 md:h-screen relative">
          <div className="col-span-12 absolute top-1/4 px-2">
            { selectedCharacter !== null && <Quote quote={selectedCharacter.quotes[quotePosition]}/> }
            
          </div>
          <div className="col-span-10 absolute top-3/4">
            { characters !== null && 
              <Gallery characters={ characters } onClickAvatar={ updateSelectedCharacter }/>
            }            
          </div>
        </section>
      </div>      
    </div>
  );
}

export default App;
