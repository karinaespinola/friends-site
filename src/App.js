import './index.css';
import { useState } from 'react';
import axios from 'axios';
import Gallery from './components/Gallery';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <div className="w-screen bg-center bg-cover bg-[url('../public/img/cast-walking.jpeg')]">
        <section className="container mx-auto grid grid-cols-12 h-80 relative">
          <div className="col-span-12 absolute top-1/4 px-2">
            <Quote />
          </div>
          <div className="col-span-10 absolute top-3/4">
            <Gallery />
          </div>
        </section>
      </div>      
    </div>
  );
}

export default App;
