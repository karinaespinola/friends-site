import './index.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <div className="w-screen bg-center bg-cover bg-[url('../public/img/cast-walking.jpeg')] p-32 md:p-72">
        <section className="container mx-auto grid grid-cols-12 relative">
          <div className="col-span-12 md:col-span-10 absolute mt-10">
            <Gallery />
          </div>
        </section>
      </div>      
    </div>
  );
}

export default App;
