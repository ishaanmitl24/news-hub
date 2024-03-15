import LightMode from "@/components/LightMode";
const Business = (props) => {
  const { data } = props;
  return (
    <div>
      <LightMode
        mode="light"
        category="Bussiness"
        link="business"
        head="Business"
        data={data}
      />
    </div>
  );
};

export default Business;

export async function getStaticProps() {
  const business = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=a4a821b942a84281a39142d5f43f8bd3&category=business"
  );
  const businessResult = await business.json();
  const businessFilteredData = businessResult.articles.filter(
    (data) => data.description != null 
  );
  return {
    props: {
      data: businessFilteredData,
    },
    revalidate:600
  };
}
