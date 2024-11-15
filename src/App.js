import "./App.css";
import Nav from "./components/Nav";
import banner_1 from "./images/banner/banner-1.png"

function App() {
  return (
    <div className="App h-full">
      {/*Banner + Nav*/}
      <div className="flex flex-col h-4/5" style={{backgroundImage: `url(${banner_1})`}}>
        <div className="absolute w-full z-10 text-white">
          <Nav></Nav>
        </div>
      </div>
      
    </div>
  );
}

export default App;
