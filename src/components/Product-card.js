function ProductCard({ whichImg, cardTitle, cardText, onClick }) {
  return (
    <div className="flex flex-col h-full w-[400px] max-[400px]:h-2/3 max-[400px]:bg-white">
      <img
        src={whichImg}
        className="h-1/2 object-cover"
        alt={`${whichImg} news`}
      ></img>
      <h5 className="sm:text-start font-light px-3 py-1 m-0 text-[#006E8A]">{cardTitle}</h5>
      <p className="text-sm h-1/2 sm:text-start p-3 m-0 text-ellipsis max-sm:w-full">
        {cardText}
        <button onClick={onClick} className="text-[#006E8AC9] m-0 text-xs pl-2">
          See More
        </button>
      </p>
    </div>
  );
}

export default ProductCard;
