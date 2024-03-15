import LightMode from "@/components/LightMode";

const Health = (props) => {
  return (
    <div>
      <LightMode
        mode="light"
        category="Health"
        link="health"
        head="Health"
        data={props.data}
      />
    </div>
  );
};

export default Health;

export async function getStaticProps(){
    const health = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=health');
    const healthResult = await health.json();
    const healthFilteredData = healthResult.articles.filter((data)=>data.description!=null&&data.urlToImage!=null);
    return{
        props:{
            data:healthFilteredData
        },
        revalidate:600
    }
}
