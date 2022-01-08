import './styles/index.css';
import InfoBox from './components/InfoBox';

function App() {
  return (
    <div className="App">
      <div className="w-screen bg-center bg-cover bg-[url('../../public/img/cast-walking.jpeg')]">
        <div className="container mx-auto px-4">
          <InfoBox 
          bgColor='orange-800'
          title='Friends'
          text='Hello Hello'
          />
        </div>
      </div>      
    </div>
  );
}

export default App;
