import charmanderGif from "./Assets/charmander-blink.gif";
import CampfireAnimation from "./campfire";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={charmanderGif} className="Charmander-logo" alt="Charmander" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CampfireAnimation />
        </div>

        <p>Puedemos quemar una tarde juntos?</p>
      </header>
    </div>
  );
}

export default App;
