import "./App.css";
import { Route } from "wouter";
import Nav from "./components/Nav";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./components/Footer";
import { Loader } from "./components/Loading";
import AnimatedWrapper from "./components/AnimatedWrapper.tsx";

function App() {
  return (
    <Loader
      page={
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
          {/*footer*/}
          <AnimatedWrapper>
            <Footer></Footer>
          </AnimatedWrapper>
        </div>
      }
    ></Loader>
  );
}

export default App;
