import award1 from "../images/AboutUs/awards/a1.png";
import award2 from "../images/AboutUs/awards/a2.png";
import award3 from "../images/AboutUs/awards/a3.png";

const images = { award1, award2, award3 };

function AwardCard({ whichImg, cardText }) {
  return (
    <div className="w-[300px] max-md:w-full h-[350px] border-[1px] max-md:border-2 border-[#006E8A] rounded flex flex-col items-center justify-between pt-6">
      <img src={images[whichImg]} alt={`${whichImg} award`}></img>
      <p className="m-0 px-3 max-md:px-0">{cardText}</p>
      <span className="bg-[#006E8A] w-full h-[30px]"></span>
    </div>
  );
}

export default AwardCard;
