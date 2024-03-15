import LightMode from "@/components/LightMode";
const Science = (props) => {
  return (
    <div>
      <LightMode
        mode="light"
        category="Science"
        link="science"
        head="Science"
        data={props.data}
      />
    </div>
  );
};

export default Science;

export async function getStaticProps(){
    const science = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=science');
    const scienceResult = await science.json();
    const scienceFilteredData = scienceResult.articles.filter((data)=>data.description!=null&&data.urlToImage!=null);

    return{
        props:{
            data:scienceFilteredData
        },
        revalidate:600
    }
}
