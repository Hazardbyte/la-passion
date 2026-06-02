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

        <p>Puedemos quemar una tarde juntos?</p>
        <div className="container">
          <button type="button">Quemar</button>{" "}
          <button type="button">Apagar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
