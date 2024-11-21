function NewsCard2({ whichImg, cardText, onClick }) {
  return (
    <div className="flex flex-col h-fit w-1/5 max-md:w-full max-md:h-[200px] border-b-4 border-[#006E8A] shadow-md hover:scale-95 transition-all" onClick={onClick}>
      <img
        src={whichImg}
        className="h-[280px] max-md:h-2/3 object-cover"
        alt={`${whichImg} news`}
      ></img>
      <p className="text-sm text-center m-0 p-3 max-md:p-0 max-md:text-xs">{cardText}</p>
    </div>
  );
}

export default NewsCard2;
