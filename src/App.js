import "./App.css";
import Nav from "./components/Nav";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App h-full">
      {/*Nav div*/}
      <div className="absolute top-0 w-full z-30 text-white">
        <Nav></Nav>
      </div>
      {/*Landing Page*/}
      {/*<Landing></Landing>*/}
      <AboutUs></AboutUs>
      {/*footer*/}
      <Footer></Footer>
    </div>
  );
}

export default App;
