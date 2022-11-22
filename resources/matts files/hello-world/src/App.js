import './App.css';
import Greeting from './components/Greeting/Greeting';
import SongList from './components/Songs/SongList';

function App() {
  return (
    <div>
      <p>The greeting is </p>
      <Greeting name="Matt" age="21" />
      <Greeting name="James" age="23" />
      <Greeting name="Susan" age="441" />
      <SongList />
    </div>
  );
}

export default App;

