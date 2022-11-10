import './App.css';
import Greeting from './components/Greeting';
import Songs from './components/Songs';

function App() {
  return (
    <div className="App">
      <Greeting name = "Oisin" age = "26" />
      <Songs />
    </div>
  );
}

export default App;
