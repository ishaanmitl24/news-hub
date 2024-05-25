import Image from "next/image";
import { Inter } from "next/font/google";
import HeroFirst from "@/components/HeroFirst";
import HeroSecond from "@/components/HeroSecond";
import TrendNews from "@/components/TrendNews";
import LightMode from "@/components/LightMode";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const {topHeadlines,entertainment,science,sports,health,business,technology} = props;

  
  return (
    <div className="flex flex-col">
      <div className="bg-gray-950 h-[100vh] flex flex-col">
        <div className="text-white flex  h-[60%] justify-between px-6 pt-10 space-x-6">
          <HeroFirst  data={topHeadlines} />
          <HeroSecond data={topHeadlines} />
        </div>
        <hr className="mt-12 w-[98%] border-gray-700 self-center" />
        <div className="flex space-x-3 mt-10 px-6">
          {topHeadlines.slice(4,8).map((item)=>(
            <TrendNews key={Math.random().toLocaleString()} item={item}/>
          ))}
        </div>
      </div>
      <div>
        <LightMode mode='light' category='Bussiness' link='business' head='Business' data={business.slice(0,4)}/>
      </div>
      <hr  className="w-[98%] self-center border-gray-300"/>
      <div>
        <LightMode mode='light' category='Entertainment' link='entertainment' head='Entertainment' data={entertainment.slice(0,4)}/>
      </div>
      <hr  className="w-[98%] self-center border-gray-300"/>
      <div>
        <LightMode mode='light' category='Health' link='health' head='Health' data={health.slice(0,4)} />
      </div>
      <hr className="w-[98%] self-center border-gray-300"/>
      <div>
        <LightMode mode='light' category='Science' link='science' head='Science' data={science.slice(0,4)} />
      </div>
      <hr  className="w-[98%] self-center border-gray-300"/>
      <div>
        <LightMode mode='light' category='Sports' link='sports' head='Sports' data={sports.slice(0,4)} />
      </div>
      <hr  className="w-[98%] self-center border-gray-300"/>
      <div>
        <LightMode mode='light' category='Technology' link='technology' head='Technology' data={technology.slice(0,4)} />
      </div>
      
    </div>
  );
}

export async function getStaticProps(){
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3');
  const result = await response.json();

  const entertainment = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=entertainment');
  const entertainmentResult = await entertainment.json();

  const science = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=science');
  const scienceResult = await science.json();

  const sports = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=sports');
  const sportsResult = await sports.json();

  const health = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=health');
  const healthResult = await health.json();

  const business = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=business');
  const businessResult = await business.json();

  const technology = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=technology');
  const technologyResult = await technology.json();

  const filteredData = result.articles.filter((data)=>data.description!=null&&data.urlToImage!=null );
  const entertainmentFilteredData = entertainmentResult.articles.filter((data)=>data.description!=null&&data.urlToImage!=null);
  const scienceFilteredData = scienceResult.articles.filter((data)=>data.description!=null&&data.urlToImage!=null);
  const sportsFilteredData = sportsResult.articles.filter((data)=>data.description!=null&&data.urlToImage!=null);
  const healthFilteredData = healthResult.articles.filter((data)=>data.description!=null&&data.urlToImage!=null);
  const businessFilteredData = businessResult.articles.filter((data)=>data.description!=null&&data.urlToImage!=null);
  const technologyFilteredData = technologyResult.articles.filter((data)=>data.description!==null&&data.urlToImage!==null);
  return {
    props:{
      topHeadlines:filteredData,
      entertainment:entertainmentFilteredData,
      science:scienceFilteredData,
      sports:sportsFilteredData,
      health:healthFilteredData,
      business:businessFilteredData,
      technology:technologyFilteredData
    },
    revalidate:10
  }
}
