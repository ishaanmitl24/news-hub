import LightMode from "@/components/LightMode";

const Sports = (props) => {
  return (
    <div>
      <LightMode
        mode="light"
        category="Sports"
        link="sports"
        head="Sports"
        data={props.data}
      />
    </div>
  );
};

export default Sports;

export async function getStaticProps() {
  const sports = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=sports"
  );
  const sportsResult = await sports.json();
  const sportsFilteredData = sportsResult.articles.filter((data)=>data.description!=null&&data.urlToImage!=null);
  return{
    props:{
        data:sportsFilteredData
    },
    revalidate:600
  }
}
