const HeroNews = (props) => {
  const getDate = (str) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = str.split("T")[0];
    const dateArr = date.split("-");
    const month = months[+dateArr[1] + 1];
    return `${month} ${dateArr[2]} ,${dateArr[0]}`;
  };
  return (
    <div key={props.key} className="h-1/4 flex space-x-2">
      <div className="w-2/5">
        <img
          className="rounded-md h-full"
          src={props.item.urlToImage}
          alt="image"
        />
      </div>
      <div className="flex flex-col justify-between w-3/5">
        <div className="flex space-x-3">
          {props.item.author && (
            <span className="text-xs text-gray-300">{props.item.author}</span>
          )}
          {!props.item.author && (
            <span className="text-xs text-gray-300">undefined</span>
          )}
          <span className="border-l border-gray-300 h-3 self-center"></span>
          <span className="text-xs text-gray-300">{getDate(props.item.publishedAt)}</span>
        </div>
        <div className="text-sm  line-clamp-2">
          {props.item.description}
        </div>
        <div className="flex space-x-3">
          <span className="text-xs text-gray-300">General</span>
          
        </div>
      </div>
    </div>
  );
};

export default HeroNews;
