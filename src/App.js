import './index.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <div className="w-screen bg-center bg-cover bg-[url('../public/img/cast-walking.jpeg')] p-32 md:p-80">
        <section className="container mx-auto grid grid-cols-12 relative">
          <div className="col-span-12 absolute mt-10 md:mt-72">
            <Gallery />
          </div>
        </section>
      </div>      
    </div>
  );
}

export default App;
