import royal_havenwood from "./../images/AboutUs/partners/royal_havenwood.jpg";
import muthukuda from "./../images/AboutUs/partners/muthukuda.jpg";
import itic from "./../images/AboutUs/partners/itic.jpg";

import { Link } from "wouter";

const images = {
  royal_havenwood,
  muthukuda,
  itic,
};

function ClientCard({ whichImg, cardTitle, cardText, cardAuthor }) {
  return (
    <div className="flex flex-col items-center w-1/4 gap-6 py-6 bg-white max-xl:w-1/3 rounded-se-3xl rounded-es-3xl max-md:w-full">
      <img
        src={images[whichImg]}
        className="w-fit h-[200px] object-contain"
        alt={`${whichImg} client`}
      />
      <h1 className="text-xl text-[#006E8A]">{cardTitle}</h1>
      <span>
        <p className="px-3 text-sm tracking-widest max-md:text-xs line-clamp-5">
          {cardText}
        </p>
        <Link href="/products" className="text-blue-700 underline">See more...</Link>
      </span>
      <p className="text-sm max-md:text-xs flex items-center justify-center m-0 p-0 w-full h-[30px] bg-[#006E8A] text-center text-white">
        {cardAuthor}
      </p>
    </div>
  );
}

export default ClientCard;
