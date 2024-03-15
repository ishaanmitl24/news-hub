const HeroFirst = (props) => {
  const getDate = (str)=>{
    const months=['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date=str.split("T")[0];
    const dateArr = date.split("-");
    const month = months[+dateArr[1]+1];
    return `${month} ${dateArr[2]} ,${dateArr[0]}`;
  }
  
  return (
    <>
      <div className="w-1/3 flex flex-col justify-between">
        <div className="space-y-12">
          <h1 className="text-3xl font-thin ">
            {props.data[0].title}
          </h1>
          <p className="text-xs tracking-wider font-medium text-gray-400">
            {props.data[0].description}
          </p>
        </div>
        <div className="text-sm font-serif flex justify-between font-medium text-gray-400">
          <span className="self-center w-auto">General</span>
          <span className="border-l border-gray-300 h-4 self-center"></span>
          <span className="self-center w-auto">{props.data[0].author}</span>
          <span className="border-l border-gray-300 h-4 self-center"></span>
          <span className="self-center">{getDate(props.data[0].publishedAt)}</span>
        </div>
      </div>
      <div className="w-1/3 flex flex-col">
        <img
          className="rounded-md"
          src={props.data[0].urlToImage}
          alt={props.data[0].title}
        />
      </div>
    </>
  );
};

export default HeroFirst;
