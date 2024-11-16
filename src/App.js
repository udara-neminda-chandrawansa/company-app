import "./App.css";
import Nav from "./components/Nav";
import Landing from "./Landing";

function App() {
  return (
    <div className="App h-full">
      {/*Nav div*/}
      <div className="absolute top-0 w-full z-30 text-white">
        <Nav></Nav>
      </div>
      {/*Landing Page*/}
      <Landing></Landing>
    </div>
  );
}

export default App;
