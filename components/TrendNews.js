

const TrendNews = (props) => {
    const getDate = (str)=>{
        const months=['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const date=str.split("T")[0];
        const dateArr = date.split("-");
        const month = months[+dateArr[1]+1];
        return `${month} ${dateArr[2]} ,${dateArr[0]}`;
      }
        
  return (
      <div key={props.key}  className="flex flex-col justify-between w-3/5 space-y-3">
        <div className="flex space-x-3">
          <span className="text-xs text-gray-300">{`${props.item.author ? props.item.author :'undefined'}`}</span>
          <span className="border-l border-gray-300 h-3 self-center"></span>
          <span className="text-xs text-gray-300">{getDate(props.item.publishedAt)}</span>
        </div>
        <div className="text-sm  line-clamp-2 text-white">
          {props.item.description}
        </div>
        <div className="flex space-x-3">
          <span className="text-xs text-gray-300">General</span>
          <span className="border-l border-gray-300 h-3 self-center"></span>
          <span className="text-xs text-gray-300">3 min+ read</span>
        </div>
      </div>
  )
}

export default TrendNews;