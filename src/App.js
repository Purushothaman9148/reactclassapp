import logo from './logo.svg';
import './App.css';
import dhoni from "./pics/Dhoni.jpg";
import virat from "./pics/Virat.jpg";
import rohit from "./pics/Rohit.jpg";


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <PlayerProfile playername="Dhoni" playerpic={dhoni} />
      <PlayerProfile playername="Virat Kohli" playerpic={virat} />
      <PlayerProfile playername="Rohit Sharma" playerpic={rohit} />
    </div>
  );
}

function PlayerProfile({ playername, playerpic }) {
  return (
    <div>
      <img src={playerpic} alt="Not available" height="150px" width="150px" />
      <h3> Name : {playername} 🏏</h3>
      <br />
    </div>
  );
}

export default App;
