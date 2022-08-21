// import logo from './logo.svg';
import './App.css';
import dhoni from "./pics/Dhoni.jpg";
import virat from "./pics/Virat.jpg";
import rohit from "./pics/Rohit.jpg";
import raina from "./pics/Raina.jpg";

function App() {
  const names = [{ name: "Dhoni", pic: dhoni }, { name: "Virat", pic: virat }, { name: "Rohit", pic: rohit }, { name: "Rohit", Pic: raina }];
  return (
    <div className="App">
      {names.map(({ name, pic }) => (<PlayerProfile playername={name} playerpic={pic} />))}
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
