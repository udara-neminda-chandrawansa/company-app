import "./App.css";
import Nav from "./components/Nav";
import banner_1 from "./images/banner/banner-1.png";

function App() {
  return (
    <div className="App h-full">
      {/*Banner*/}
      <div
        className="flex flex-col h-4/5 bg-gradient-to-r from-black to-blue-500 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${banner_1})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute h-4/5 inset-0 bg-gradient-to-br from-[transparent] to-[#022E39]"></div>
        {/*Nav div*/}
        <div className="absolute w-full z-10 text-white">
          <Nav></Nav>
        </div>
        {/*text content*/}
        <div className="flex flex-col gap-24 w-full h-full items-center justify-center p-[100px]">
          <h1 className="text-4xl text-white z-10 font-medium w-full text-start">
            Nothing Is More Attractive Than Quality
          </h1>
          <p className="text-sm font-light text-white text-start bg-gray-950 bg-opacity-30 z-10 p-3">
            Our customers are at the heart of everything we do. We partner with
            businesses of all sizes to deliver tailored software solutions that
            drive growth, efficiency, and innovation. By understanding your
            unique needs, we craft technology that empowers you to thrive in a
            rapidly changing digital landscape. Your success is our mission, and
            we are committed to supporting you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
