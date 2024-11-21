import "./App.css";
import { Route } from "wouter";
import Nav from "./components/Nav";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./components/Footer";
import NewsEvents from "./News&Events.js";
import Partners from "./Partners.js";
import AnimatedWrapper from "./components/AnimatedWrapper.tsx";

function App() {
  return (
    <div className="App h-full">
      {/*Nav div*/}
      <div className="absolute top-0 w-full z-30 text-white">
        <AnimatedWrapper>
          <Nav></Nav>
        </AnimatedWrapper>
      </div>
      {/*Landing Page*/}
      <Route path="/" component={Landing} />
      {/*About Us Page*/}
      <Route path="/aboutus" component={AboutUs} />
      {/*Contact Us Page*/}
      <Route path="/contact" component={ContactUs} />
      {/*News & Events Page*/}
      <Route path="/news" component={NewsEvents} />
      {/*Partners Page*/}
      <Route path="/partners" component={Partners} />
      {/*footer*/}
      <AnimatedWrapper>
        <Footer></Footer>
      </AnimatedWrapper>
    </div>
  );
}

export default App;
