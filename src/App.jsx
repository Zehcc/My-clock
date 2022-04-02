import Chrono from "./components/Chrono/Chrono";
import Clock from "./components/Clock/Clock";
import CountDown from "./components/CountDown/CountDown";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Clock/>
      <CountDown/>
      <Chrono/>
    </div>
  );
}

export default App;

