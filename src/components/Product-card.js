function ProductCard({ whichImg, cardText, onClick }) {
  return (
    <div className="flex flex-col h-full w-[400px] shadow-md">
      <img
        src={whichImg}
        className="h-1/2 object-cover"
        alt={`${whichImg} news`}
      ></img>
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
