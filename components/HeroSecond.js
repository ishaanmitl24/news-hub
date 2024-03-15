import HeroNews from "./HeroNews";

const HeroSecond = (props) =>{
  return (
    <div className="flex flex-col w-1/3 space-y-3 justify-between text-white">
      {props.data.slice(1,4).map((item)=>(
        <HeroNews key={Math.random().toLocaleString()} item={item}/>
      ))}
    </div>
  );
};

export default HeroSecond;
