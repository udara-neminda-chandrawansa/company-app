import "./App.css";
import Nav from "./components/Nav";
import Landing from "./Landing";

function App() {
  return (
    <div className="App h-full">
      {/*Nav div*/}
      <div className="absolute w-full z-10 text-white">
        <Nav></Nav>
      </div>
      {/*Landing Page*/}
      <Landing></Landing>
    </div>
  );
}

export default App;
