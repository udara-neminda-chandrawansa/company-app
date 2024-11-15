import mob from "../images/service-cards/mob.png";
import desk from "../images/service-cards/desk.png";
import web from "../images/service-cards/web.png";
import uxui from "../images/service-cards/uxui.png";
import va from "../images/service-cards/va.png";

const images = {
  mob,
  desk,
  web,
  uxui,
  va,
};

function ServiceCard({ whichImg, cardTitle, cardText, imgOnSide }) {
  if (imgOnSide === "true") {
    return (
      <div className="flex items-center gap-3 h-fit w-[300px] p-3 text-start max-md:text-center basis-full sm:basis-1/2 max-md:h-[70vh] max-md:flex-col max-md:w-[72vw] max-md:p-0">
        {/* Dynamically render the image */}
        <img
          src={images[whichImg]}
          className="w-1/3 h-full object-contain max-h-[500px] max-md:w-full max-md:h-1/3"
          alt={`${whichImg} service`}
        />
        <div className="w-2/3 flex flex-col gap-3 justify-between max-md:w-full max-md:h-2/3">
          <h1 className="text-2xl uppercase bg-gradient-to-r from-[#006E8A] to-[#57B377] text-transparent bg-clip-text">
            {cardTitle}
          </h1>
          <p className="text-sm px-6">{cardText}</p>
          <span className="w-full flex max-md:justify-center">
            <button className="bg-[#006E8A] text-white w-fit py-3 px-12 rounded flex justify-center items-center">
              View All
            </button>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-3 h-fit w-[300px] p-3 text-start max-md:text-center basis-full sm:basis-1/2 max-md:h-[70vh] max-md:w-[75vw] max-md:p-0">
        {/* Dynamically render the image */}
        <img
          src={images[whichImg]}
          className="w-full h-full object-contain max-h-[200px] max-md:h-1/3"
          alt={`${whichImg} service`}
        />
        <h1 className="text-2xl uppercase bg-gradient-to-r from-[#006E8A] to-[#57B377] text-transparent bg-clip-text">
          {cardTitle}
        </h1>
        <p className="text-sm px-6">{cardText}</p>
        <span className="w-full flex max-md:justify-center">
          <button className="bg-[#006E8A] text-white w-fit py-3 px-12 rounded flex justify-center items-center">
            View All
          </button>
        </span>
      </div>
    );
  }
}

export default ServiceCard;
