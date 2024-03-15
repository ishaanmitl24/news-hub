import LightMode from "@/components/LightMode";
const Entertainement = (props) => {
  return (
    <div>
      <LightMode
        mode="light"
        category="Entertainment"
        link="entertainment"
        head="Entertainment"
        data={props.data}
      />
    </div>
  );
};

export default Entertainement;

export async function getStaticProps() {
  const entertainment = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=entertainment"
  );
  const entertainmentResult = await entertainment.json();
  const entertainmentFilteredData = entertainmentResult.articles.filter((data)=>data.description!=null&&data.urlToImage!=null);
  return{
    props:{
        data:entertainmentFilteredData
    },
    revalidate:600
  }
}

