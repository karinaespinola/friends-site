import './index.css';
import axios from 'axios';
import Gallery from './components/Gallery';
import Quote from './components/Quote';
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

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



  return (
    <div className="App">
      <div className="w-screen bg-center bg-cover bg-[url('../public/img/cast-walking.jpeg')]">
        <section className="container mx-auto grid grid-cols-12 h-80 relative">
          <div className="col-span-12 absolute top-1/4 px-2">
            <Quote />
          </div>
          <div className="col-span-10 absolute top-3/4">
            { characters !== null && 
              <Gallery characters={characters}/>
            }
            
          </div>
        </section>
      </div>      
    </div>
  );
}

export default App;
