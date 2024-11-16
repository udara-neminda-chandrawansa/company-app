function NewsCard({ whichImg, cardText }) {
  return (
    <div className="flex flex-col h-[280px] w-[400px] shadow-md">
      <img
        src={whichImg}
        className="h-[200px] object-cover"
        alt={`${whichImg} news`}
      ></img>
      <p className="text-sm text-start p-3">{cardText}</p>
    </div>
  );
}

export default NewsCard;
