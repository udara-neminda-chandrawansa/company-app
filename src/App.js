import "./App.css";
import { Route } from "wouter";
import Nav from "./components/Nav";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App h-full">
      {/*Nav div*/}
      <div className="absolute top-0 w-full z-30 text-white">
        <Nav></Nav>
      </div>
      {/*Landing Page*/}
      <Route path="/" component={Landing} />
      {/*About Us Page*/}
      <Route path="/aboutus" component={AboutUs} />
      {/*Contact Us Page*/}
      <Route path="/contact" component={ContactUs} />
      {/*footer*/}
      <Footer></Footer>
    </div>
  );
}

export default App;
