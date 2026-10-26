import charmanderGif from "./Assets/charmander-blink.gif";
import squirtleGif from "./Assets/squirtle-jumping.gif";
import CampfireAnimation from "./campfire";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-container">
          <img src={charmanderGif} className="Charmander" alt="Charmander" />
          <CampfireAnimation />
          <img src={squirtleGif} className="Squirtle" alt="Squirtle" />
        </div>

        <p>Can we go to the park tonite?</p>
      </header>
    </div>
  );
}

export default App;
