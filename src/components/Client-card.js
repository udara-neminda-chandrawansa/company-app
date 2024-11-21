import slair from "../images/client-cards/slairlines.png";
import slcus from "../images/client-cards/slcustoms.png";
import sample from "../images/client-cards/exampleclient.png";

const images = {
  slair,
  slcus,
  sample,
};

function ClientCard({ whichImg, cardTitle, cardText, cardAuthor }) {
  return (
    <div className="w-1/4 max-xl:w-1/3 bg-white rounded-se-3xl rounded-es-3xl flex flex-col items-center gap-6 py-6 max-md:w-full">
      <img
        src={images[whichImg]}
        className="w-fit h-[200px] object-contain"
        alt={`${whichImg} client`}
      />
      <h1 className="text-xl text-[#006E8A]">{cardTitle}</h1>
      <p className="text-sm max-md:text-xs tracking-widest px-3">{cardText}</p>
      <p className="text-sm max-md:text-xs flex items-center justify-center m-0 p-0 w-full h-[30px] bg-[#006E8A] text-center text-white">{cardAuthor}</p>
    </div>
  );
}

export default ClientCard;
