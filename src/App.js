import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project is created by Jakiya Rahman and is{" "}
          <a
            href="https://github.com/Burgundypanda/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Githib
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
