import "./App.css";
import Greeting from "./components/Greeting";
import Songs from "./components/Songs";
import Navbar from "./components/Navbar";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="App">
      <Greeting name="Oisin" age="26" />
      <SongList />
    </div>
  );
}

export default App;
