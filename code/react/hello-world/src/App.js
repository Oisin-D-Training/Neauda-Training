import "./App.css";
import Greeting from "./components/Greeting";
import Songs from "./components/Songs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Greeting name="Oisin" age="26" />
      <Songs />
      <Navbar />
    </div>
  );
}

export default App;
