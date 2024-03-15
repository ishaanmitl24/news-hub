import LightMode from "@/components/LightMode";

const Technology = (props) => {
  return (
    <div>
      <LightMode
        mode="light"
        category="Technology"
        link="technology"
        head="Technology"
        data={props.data}
      />
    </div>
  );
};

export default Technology;

export async function getStaticProps() {
  const technology = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=technology"
  );
  const technologyResult = await technology.json();
  const technologyFilteredData = technologyResult.articles.filter(
    (data) => data.description !== null && data.urlToImage !== null
  );
  return{
    props:{
        data:technologyFilteredData
    },
    revalidate:600
  }
}
