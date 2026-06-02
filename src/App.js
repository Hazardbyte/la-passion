import charmanderGif from "./Assets/charmander-blink.gif";
import squirtleGif from "./Assets/squirtle-jumping.gif";
import CampfireAnimation from "./campfire";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "150px",
            position: "relative",
          }}
        >
          <img
            src={charmanderGif}
            className="Charmander"
            alt="Charmander"
            position="absolute"
          />
          <CampfireAnimation />
          <img
            src={squirtleGif}
            className="Squirtle"
            alt="Squirtle"
            position="absolute"
          />
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
